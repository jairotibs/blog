
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  
  const history = useHistory();


  const { error, isPending, data: autores } = useFetch('http://localhost:8000/autores');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }



  return (
 
    <div className="create">
      <h2>Add a New Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
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
          {/*realiza a listagem dos autores.*/}
          {autores && autores.map(autor=>(<option value={autor.nome.toLowerCase()}>{autor.nome}</option>))}
         
        </select>
        <button>Add Blog</button>
      </form>
    </div>

  
  );
}
 
export default Create;