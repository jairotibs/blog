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

//A url é atualizada apenas quando as informações referentes a opção selecionada no primeiro seletor é realizada ou quando alguma opção no segundo seletor é selecionado.
//Se apenas o item do primeiro seletor é escolhido, toda lista é mantida. O segundo item só aparece nos casos de autor e categorias. Então, se o segundo item for escolhido, 
//obteremos uma url completa para realizarmos uma busca específica no arquivo json.
useEffect(()=>{

  if (opcao === 'selecione'){
    
    setOpcaoCategoria('');
    setOpcaoAutor('');
    setOpcaoPalavrasChave('');
    setUrll(ulr2)
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
},[opcaoCategoria, opcaoAutor, opcaoPalavrasChave, opcao, urll])

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