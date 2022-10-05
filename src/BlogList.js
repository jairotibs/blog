import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seletor from './Seletor';

const BlogList = ({ blogs, criteriosBusca, categorias, autores}) => {
  //para cada critério, um item será escolhido. Essas informações serão setadas ao chamar
  const[criterioEscolhido, setCriterioEscolhido] = useState('')
  const[itemEscolhido, setItemEscolhido] = useState('')

  return (
   /* <>
    //<FormControlLabel 
    label="Parent"
    />*/
    <>

    {console.log(criteriosBusca)}
      <div>
       <fieldset>
          <legend>Filtrar por</legend>
          <Seletor criteriosBusca={criteriosBusca} categorias={categorias} autores={autores} funcaoCriterio={setCriterioEscolhido} funcaoItem={setItemEscolhido}/>
      </fieldset>
      </div>
      <div className="blog-list">
      
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}


     {console.log('escolhido '+criterioEscolhido)}
    </div>
  </>
  );
}
 
export default BlogList;