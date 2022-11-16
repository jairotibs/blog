//import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import useFetch from "./useFetch";

const BlogDetails = () => {
  
  const { id } = useParams();
 
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();
  

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }


  const redirecionarAtualizar = () =>{
    history.push('/atualizar/'+id);
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.titulo }</h2>
          <p>Escrito por { blog.autor }</p>
          <div>{ blog.categoria }</div>
          <div>{ blog.conteudo }</div>
          <div>{ blog.palavrasChave}</div>
          <p>Data da Criação: {blog.dataCadastro}</p>
          <button onClick={handleClick}>delete</button>
          <button onClick={redirecionarAtualizar}>Atualizar</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;