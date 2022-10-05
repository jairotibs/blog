import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const CriarAtualizarblog = (props) => {
  const history = useHistory();
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [categoria, setCategoria] = useState('')
  const [palavrasChave, setPalavrasChave] = useState('')
  const dataAtualizacao = new Date()
  const [ultimaDataAtualizacao, setUltimaDataAtualizacao] = useState(dataAtualizacao)
  
  const { id } = useParams();
  
  const { error, isPending, data: autores } = useFetch(props.dominio + props.diretorio);//diretorio->autores
  const { error : erro, isPending : pendente, data: categorias } = useFetch(props.dominio + props.diretorio);//diretorio->categorias
  //const { error : erro, isPending : pendente, data: categorias } = useFetch('http://localhost:8000/categorias');//diretorio->categorias
  //const { error, isPending, data: autores } = useFetch('http://localhost:8000/autores');
 // const { error : erro, isPending : pendente, data: categorias } = useFetch('http://localhost:8000/categorias');

 //Obtém os dados(GET) quando a página é carregada; Realiza essa operação apenas uma vez;
 //Os dados serão utilizados para setar os campos do formulário(atualizar)
    useEffect( ()=>{
    //fetch('http://localhost:8000/blogs/' + id, {//diretorio->blogs/ props.dominio
    fetch(props.dominio+'/'+props.diretorio +'/'+ id, {//diretorio->blogs
    }).then(retorno =>retorno.json())
      .then((registro)=>{
      setTitle(registro.title);
      setAuthor(registro.author);
      setBody(registro.body);
      setCategoria(registro.categoria);
      setPalavrasChave(registro.palavrasChave);
      //JSON.stringify(dadosBlog);
      })
      
    },[id])
 
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(title);
    fetch('http://localhost:8000/blogs/'+ id, {
     // fetch(props.dominio)
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
            <label>Blog title:</label>
            <input 
              type="text" 
              required 
              value={title}
              onChange={(e) => setTitle(e.target.value)}

             />

        <label>Categoria:</label>
        <select value={categoria} 
                onChange={(e)=>setCategoria(e.target.value)}

        >
          {/*categorias && categorias.map(cat =>(<option value={cat.nome.toLowerCase()}>{cat.nome}</option>))*/}
          {categorias && categorias.map(cat=>(<option value={cat.nomeCategoria.toLowerCase()}>{cat.nomeCategoria}</option>))}
        </select>

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Palavras-chave</label>
        <input type="text" required value={palavrasChave} onChange={e=>setPalavrasChave(e.target.value)} />

        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          {/*realiza a listagem dos autores.*/}
          {autores && autores.map(autor=>(<option value={autor.nome.toLowerCase()}>{autor.nome}</option>))}
          
        </select>
        <button>{ props.nomeBotao }</button>
      </form>
  </div>
    
  );
}
 
export default CriarAtualizarblog;