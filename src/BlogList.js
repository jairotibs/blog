import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InputPalavrasChave from './InputPalavrasChave';
import ListaCategoria from './ListaCategoria';
import ListarAutores from './ListarAutores';
import useFetch from './useFetch';
//import useFetch from './useFetch';
//import Seletor from './Seletor';

const BlogList = ({ criteriosBusca, categorias, autores}) => {
  //para cada critério, um item será escolhido. Essas informações serão setadas ao chamar
  {/*const[criterioEscolhido, setCriterioEscolhido] = useState('')
     const[itemEscolhido, setItemEscolhido] = useState('')*/} 
  const [opcao, setOpcao] = useState('')
  const [opcaoCategoria, setOpcaoCategoria] = useState('')
  const [opcaoAutor, setOpcaoAutor] = useState('')
  const [opcaoPalavrasChave, setOpcaoPalavrasChave] = useState('')
  //const [dados, setDados] = useState(null)
  const ulr2 = 'http://localhost:8000/blogs';
  const [urll, setUrll] = useState('')
  const { error, isPending, data: blogs } = useFetch(urll);

//const {data} = useBuscarItem(urll);
//A url é atualizada apenas quando as informações referentes a opção selecionada no primeiro seletor é realizada ou quando alguma opção no segundo seletor é selecionado.
//Se apenas o item do primeiro seletor é escolhido, toda lista é mantida. O segundo item só aparece nos casos de autor e categorias. Então, se o segundo item for escolhido, 
//obteremos uma url completa para realizarmos uma busca específica no arquivo json.
useEffect(()=>{

  if (opcaoCategoria !== '' || opcaoAutor !== ''){
    console.log('a opcao ehx '+opcao)
    if (opcao === 'author'){
    //console.log(ulr2+'?'+`${opcao}`+'_like='+`${opcaoAutor}`);
    setUrll(ulr2+'?'+`${opcao}`+'_like='+`${opcaoAutor}`)
    }
    else if(opcao === 'categoria'){
      //console.log(ulr2+'?'+`${opcao}`+'_like='+`${opcaoCategoria}`);
    setUrll(ulr2+'?'+`${opcao}`+'_like='+`${opcaoCategoria}`)
    }
   {/* else if (opcao === 'palavraschave'){
      console.log('aquiiiiiiiiiiiiiiiiiiiii '+opcao)
      console.log('aquiiiiiiiiiiiiiiiiiiiii '+opcaoPalavrasChave)
      setUrll(ulr2+'?'+`${opcao}`+'_like='+`${opcaoPalavrasChave}`)
      console.log(ulr2)
    }*/}
  } 
  else if ((opcao === 'palavrasChave')){

    if (opcaoPalavrasChave !== ''){
    console.log('aquiiiiiiiiiiiiiiiiiiiii '+opcao)
    console.log('aquiiiiiiiiiiiiiiiiiiiii '+opcaoPalavrasChave)
    setUrll(ulr2+'?'+`${opcao}`+'_like='+`${opcaoPalavrasChave}`)
    console.log(ulr2)
    }
    else {
      setUrll(ulr2)
    }
  }
  else {
    setUrll(ulr2)
  }

},[opcaoCategoria, opcaoAutor, opcaoPalavrasChave, opcao, urll])

  const exibirSegundoItem = (option) => {
  {/*console.log('dentro a opcao ehh '+opcao)*/}
    switch(option){
        case 'author': return (<ListarAutores autor={opcaoAutor} funcao={setOpcaoAutor} autores={autores}/>);
        //case 'categoria': <ListaCategoria categoria={opcaoCategoria} funcao={setOpcaoCategoria} categorias={categorias}/>
        case 'categoria' : return (<ListaCategoria categoria={opcaoCategoria} categorias={categorias} funcao={setOpcaoCategoria} />);
       // case 'palavras-chave':<BuscaPalavraChave />
        case 'palavrasChave' : return(<InputPalavrasChave funcao={setOpcaoPalavrasChave}/>);
        default:  ;
        break;
    }
    console.log('opcao opcao '+opcao)
    {/*setUrll(urll+'?'+`${opcao}`+'_like='+`${opcaoAutor}`)*/}
   {/*useBuscarItem('http://localhost:8000/')*/}
   {/*funcaoCriterio(option);*/}
   {/*funcaoItem(opcaoCategoria != '' ? opcaoCategoria : (opcaoAutor != '' ? opcaoAutor : ''))*/}
}

{/*const exibirSegundoItem2 = (e, option) => {
  e.preventDefault();
  switch(option){
    case 'autor': { 
                    setUrll(urll+'?'+`${opcao}`+'_like='+`${opcaoAutor}`);
                    console.log(urll)
                    return (<ListarAutores autor={opcaoAutor} funcao={setOpcaoAutor} autores={autores}/>)
                  };
    //case 'categoria': <ListaCategoria categoria={opcaoCategoria} funcao={setOpcaoCategoria} categorias={categorias}/>
    case 'categoria' : return (<ListaCategoria categoria={opcaoCategoria} categorias={categorias} funcao={setOpcaoCategoria} />);
   // case 'palavras-chave':<BuscaPalavraChave />
    case 'palavras-chave' : return('');
    default:  ;
    break;
}
}*/}

/*const useBuscarItem = (url) =>{
  useEffect(()=>{
    fetch(url,{}
      ).then(retorno =>retorno.json())
      .then(data=>{
        setDados(data);
      }).catch((err)=>{console.log(err.message())})
  },[url])
  return data;
}*/

  return (
   /* <>
    //<FormControlLabel 
    label="Parent"
    />*/
    <>
    

      <div>
       <fieldset>
          <legend>Filtrar por</legend>
          {/*<Seletor criteriosBusca={criteriosBusca} categorias={categorias} autores={autores} funcaoCriterio={setCriterioEscolhido} funcaoItem={setItemEscolhido}/>*/}
          
      <select onChange={e => setOpcao(e.target.value) } >
         <option value="selecione">Selecione</option>
         {criteriosBusca && criteriosBusca.map(criterio=><option key={criterio.nome} value={criterio.nome}>{criterio.nome}</option>)}
      </select>

      {/*<select onChange={e=>exibirSegundoItem2(e,e.target.value)} >
         <option value="selecione">Selecione</option>
         {criteriosBusca && criteriosBusca.map(criterio=><option key={criterio.nome} value={criterio.nome.toLowerCase()}>{criterio.nome}</option>)}
    </select>*/}
          
          {exibirSegundoItem(opcao)}
          {/*setUrll(urll+'?'+`${opcao}`+'_like='+`${opcaoAutor}`)*/}
          {console.log('url: '+urll)}
      </fieldset>

      </div>

      <div className="blog-list">
      {/* se o primeiro campo estiver selecionado, mas o segundo não estiver, manter a lista na tela. */}
      {blogs && blogs.length > 0 ? (blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))
      
      ) : <p>Não há blogs</p>}  
      {/*!(opcao ==='' || opcao ==='selecione') && opcao ==='autor' && blogs.filter(blogg=>blogg.categoria===itemEscolhido).map(blog => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))*/}
      { /*console.log(blogs?opcao_like=opcaoCategoria)*/ }
    {/*setUrll(urll+'?'+`${opcao}`+'_like='+`${opcaoAutor}`)*/}
     {/*{console.log('opcao escolhida:: '+opcao)}
     {console.log('url escolhida '+urll)}
     {console.log('item escolhido:: '+opcaoCategoria)}
     {console.log('item escolhido::: '+opcaoAutor)}
    {console.log('item escolhido::: '+opcaoPalavrasChave)}*/}
     {/*setItemEscolhido(opcaoCategoria !=''? opcaoCategoria : (opcaoAutor != '' ? opcaoAutor: opcaoAutor))*/}
     {/*console.log('criterio escolhido: '+criterioEscolhido +'item escolhido:'+itemEscolhido)*/}
     {/*console.log('item escolhido2 ' + itemEscolhido)*/}
    </div>
  </>
  );
}
 
export default BlogList;