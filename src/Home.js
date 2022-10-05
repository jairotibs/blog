import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs');
  
  //a partir daqui foi adicionado
  const { error : erro, isPending : pendente, data: criteriosBusca } = useFetch('http://localhost:8000/criteriosBusca');
  const { error : erros, isPending : pendencia, data: categorias } = useFetch('http://localhost:8000/categorias');
  const { error : errosAutores, isPending : pendenciaAutores, data: autores } = useFetch('http://localhost:8000/autores');


  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs  && categorias && criteriosBusca && autores && <BlogList blogs={blogs} criteriosBusca={criteriosBusca} categorias={categorias} autores={autores} /> }
    </div>
  );
}
 
export default Home;