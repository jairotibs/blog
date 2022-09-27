import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";


const Atualizar = () => {
  const history = useHistory();
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  
  const { id } = useParams();


 //Obtém os dados(GET) quando a página é carregada; Realiza essa operação apenas uma vez;
 //Os dados serão utilizados para setar os campos do formulário(atualizar)
    useEffect( ()=>{
    fetch('http://localhost:8000/blogs/' + id, {
    }).then(retorno =>retorno.json())
      .then((registro)=>{
      setTitle(registro.title);
      setAuthor(registro.author);
      setBody(registro.body);
      //JSON.stringify(dadosBlog);
      })
      
    },[id])
 
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(title);
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
            <label>Blog title:</label>
            <input 
              type="text"
              id="titulo" 
              required 
              value={title}
              //var valor = {document.getElementById("titulo").value = "aa"} 
              onChange={(e) => setTitle(e.target.value)}

        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
          <option value="jairo">Jairo</option>
          <option value="tony">Tony</option>
          <option value="saulo">Saulo</option>
          <option value="marlos">Marlos</option>
          <option value="lucas">Lucas</option>
        </select>
        <button>Atualizar Blog</button>
      </form>
  </div>
    
  );
}
 
export default Atualizar;