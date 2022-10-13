import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InputPalavrasChave from './InputPalavrasChave';
import ListaCategoria from './ListaCategoria';
import ListarAutores from './ListarAutores';
import useFetch from './useFetch';

const BlogList = ({ criteriosBusca, categorias, autores}) => {
  //para cada critério, um item será escolhido. Essas informações serão setadas ao chamar
 
  const [opcao, setOpcao] = useState('')
  const [opcaoCategoria, setOpcaoCategoria] = useState('')
  const [opcaoAutor, setOpcaoAutor] = useState('')
  const [opcaoPalavrasChave, setOpcaoPalavrasChave] = useState('')
  const ulr2 = 'http://localhost:8000/blogs';
  const [urll, setUrll] = useState('')
  const { error, isPending, data: blogs } = useFetch(urll);

  const [selecionadoOp1, setSelecionadoOp1] = useState(false);//asc
  const [selecionadoOp2, setSelecionadoOp2] = useState(false);//desc
  const [selecionadoOp3, setSelecionadoOp3] = useState(false);//nada
  //&_sort=title&_order=desc
  //const ordenacao = '&_sort='.concat(title).concat('&_order=').concat(desc);
//A url é atualizada apenas quando as informações referentes a opção selecionada no primeiro seletor é realizada ou quando alguma opção no segundo seletor é selecionado.
//Se apenas o item do primeiro seletor é escolhido, toda lista é mantida. O segundo item só aparece nos casos de autor e categorias. Então, se o segundo item for escolhido, 
//obteremos uma url completa para realizarmos uma busca específica no arquivo json.
useEffect(()=>{

  if (opcao === 'selecione'){
    
    setOpcaoCategoria('');
    setOpcaoAutor('');
    setOpcaoPalavrasChave('');
   //se o asc estiver selecionado
    if (selecionadoOp1){
      console.log('op1')
      //setUrll(ulr2.concat('?_sort=title&_order=').concat('asc'))
      setUrll(ulr2+'?_sort=title&_order=asc')
      console.log(urll);
    }//se o desc estiver selecionado
    else if (selecionadoOp2){
      console.log('aqui')
    }
    else{//se não houver seleção ou a terceira opção estiver selecionada
      setUrll(ulr2)
   }
  }
  else if (opcaoCategoria !== '' || opcaoAutor !== ''){

    if (opcao === 'author'){
    setUrll(ulr2+'?'+`${opcao}`+'_like='+`${opcaoAutor}`)
    }
    else if(opcao === 'categoria'){
      setUrll(ulr2+'?'+`${opcao}`+'_like='+`${opcaoCategoria}`)
    }

  } 
  else if (opcao === 'palavrasChave'){
    
    if (opcaoPalavrasChave !== ''){
      setUrll(ulr2+'?'+`${opcao}`+'_like='+`${opcaoPalavrasChave}`)
    }
    else {
      setUrll(ulr2)
    }

  }
  else {//caso apenas o primeiro item esteja selecionado, listar apenas a lista original
    setUrll(ulr2)
  }
},[opcaoCategoria, opcaoAutor, opcaoPalavrasChave, opcao, urll, selecionadoOp1])

{/*useEffect(()=>{

  if (selecionadoOp1){
    console.log('entrou1');
    //setSelecionadoOp2(false)
    //setSelecionadoOp1(true)
    console.log('setou op1'.concat(selecionadoOp1))
    console.log('setou op2'.concat(selecionadoOp2))
  }
  else if (selecionadoOp2){
    console.log('entrou2');
   // setSelecionadoOp1(false)
    //setSelecionadoOp2(true)
    console.log('setou op1'.concat(selecionadoOp1))
    console.log('setou op2'.concat(selecionadoOp2))
  }
},[selecionadoOp1, selecionadoOp2]
)*/}
{/*useEffect(()=>{
  console.log(selecionadoOp1)
  console.log(selecionadoOp2)
},[selecionadoOp1,selecionadoOp2])*/}

{/*useEffect(()=>{

  if (selecionadoOp1){
    console.log("selec 1")
    setSelecionadoOp2(!selecionadoOp1)
  }
  else if(selecionadoOp2){
    console.log("selec 2")
    setSelecionadoOp1(!selecionadoOp1)
  }

},[selecionadoOp1, selecionadoOp2]
)*/}

const exibirSegundoItem = (option) => {
    
    switch(option){

        case 'author': return (<ListarAutores autor={opcaoAutor} funcao={setOpcaoAutor} autores={autores}/>);
        case 'categoria' : return (<ListaCategoria categoria={opcaoCategoria} categorias={categorias} funcao={setOpcaoCategoria} />);
        case 'palavrasChave' : return(<InputPalavrasChave funcao={setOpcaoPalavrasChave}/>);
        default:  ;
        break;

    }
    console.log('opcao opcao '+opcao)
}

//apenas muda o valor - A lógica ficará no effect
const mudarValorClique = ( valor) => {
 
  //se a seleção for asc, verifico o estado do segundo componente. Se estiver true, torna-se false
  if (valor === 'asc') {
    console.log('entrou no asc')
    setSelecionadoOp2(selecionadoOp2 ? !selecionadoOp2 : selecionadoOp2);
    setSelecionadoOp1(true);
    //setSelecionadoOp1(!selecionadoOp2);
   //setSelecionadoOp2(!selecionadoOp2);
  }//se a seleção 
  else {
    console.log('entrou no desc')
    setSelecionadoOp1(selecionadoOp1 ? !selecionadoOp1 : selecionadoOp1);
    setSelecionadoOp2(true);
  }

};

  return (

    <>
     
      <fieldset>
        <legend>Filtrar por</legend>
          {/*<Seletor criteriosBusca={criteriosBusca} categorias={categorias} autores={autores} funcaoCriterio={setCriterioEscolhido} funcaoItem={setItemEscolhido}/>*/}
          
        <select onChange={e => setOpcao(e.target.value) } >
           <option value="selecione">Selecione</option>
           {criteriosBusca && criteriosBusca.map(criterio=><option key={criterio.nome} value={criterio.nome}>{criterio.nome}</option>)}
        </select>  
        {exibirSegundoItem(opcao)}
      
        
      </fieldset>

      <fieldset>
        <legend>Ordenar</legend>
        <div>
          <label>
            <input type="radio" value={selecionadoOp1} name="asc" onChange={e=>mudarValorClique(e.target.name)} checked={selecionadoOp1}/>asc
            {/*<input type="radio" value={selecionadoOp1} name="asc" onChange={e=>setSelecionadoOp1(!e.target.value)} checked={selecionadoOp1}/>asc*/}
          </label>
          <label>
            <input type="radio" value={selecionadoOp2} name="desc" onChange={e=>mudarValorClique(e.target.name)} checked={selecionadoOp2} />desc
            {/*<input type="radio" value={selecionadoOp2} name="desc" onChange={e=>setSelecionadoOp2(!e.target.value)} checked={selecionadoOp2} />*/}
          </label>
          <label>
            <input type="radio" value={selecionadoOp3} name="no" onChange={e=>mudarValorClique(e.target.name)} checked={selecionadoOp3}></input>
          </label>
        </div>
      </fieldset>
    
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
    </div>
  </>
  );
}
 
export default BlogList;