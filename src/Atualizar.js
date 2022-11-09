import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const Atualizar = () => {
  const history = useHistory();
  
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [autor, setAutor] = useState('');
  const [categoria, setCategoria] = useState('')
  const [palavrasChave, setPalavrasChave] = useState('')
  const [dataCadastro, setDataCadastro] = useState('')
  const dtAtualizacao = new Date(Date.now()).toLocaleString();//data hora
  const [dataUltimaAtualizacao, setDataUltimaAtualizacao] = useState(dtAtualizacao);
  
  const { id } = useParams();

  const { error, isPending, data: autores } = useFetch('http://localhost:8000/autores');
  const { error : erro, isPending : pendente, data: categorias } = useFetch('http://localhost:8000/categorias');

 //Obtém os dados(GET) quando a página é carregada; Realiza essa operação apenas uma vez;
 //Os dados serão utilizados para setar os campos do formulário(atualizar)
    useEffect( ()=>{
    fetch('http://localhost:8000/blogs/' + id, {
    }).then(retorno =>retorno.json())
      .then((registro)=>{
      setTitulo(registro.titulo);
      setAutor(registro.autor);
      setConteudo(registro.conteudo);
      setCategoria(registro.categoria);
      setPalavrasChave(registro.palavrasChave);
      setDataCadastro(registro.dataCadastro);
      //JSON.stringify(dadosBlog);
      })
      
    },[id])
 
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { titulo, autor, conteudo, categoria, palavrasChave, dataCadastro, dataUltimaAtualizacao };
    console.log(titulo);
    fetch('http://localhost:8000/blogs/'+ id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
  
    <div className="create">
        <form onSubmit={handleSubmit}>
            <label>Blog titulo:</label>
            <input 
              type="text" 
              required 
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}

             />

        <label>Categoria:</label>
        <select value={categoria} 
                onChange={(e)=>setCategoria(e.target.value)}
                
        >
          {/*categorias && categorias.map(cat =>(<option value={cat.nome.toLowerCase()}>{cat.nome}</option>))*/}
          {categorias && categorias.map(cat=>(<option key={cat.nomeCategoria.toLowerCase()} value={categoria===cat.nomeCategoria.toLowerCase()?categoria:cat.nomeCategoria.toLowerCase()}>{cat.nomeCategoria}</option>))}
          {console.log('categoria: '+categoria)}
        </select>

        <label>Conteúdo:</label>
        <textarea
          required
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
        ></textarea>

        <label>Palavras-chave</label>
        <input type="text" required value={palavrasChave} onChange={e=>setPalavrasChave(e.target.value)} />

        <label>Autor:</label>
        <select
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        >
          {/*realiza a listagem dos autores.*/}
          {autores && autores.map(author=>(<option key={author.nome.toLowerCase()} value={autor===author.nome.toLowerCase()?autor:author.nome.toLowerCase()} >{author.nome}</option>))}
          
        </select>
        <button>Atualizar Blog</button>
      </form>
  </div>
    
  );
}
 
export default Atualizar;