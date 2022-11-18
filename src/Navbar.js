import { Link } from "react-router-dom";
import MenuItens from "./MenuItens";
import useFetch from "./useFetch";

const Navbar = () => {

  const {error, isPending, data: menuItens} = useFetch('http://localhost:8000/menuItens')

  return (
    <>
     <nav className="navbar">
     <h1>Blogs Manager</h1>
     <div className="links">
     {/*<Link to={ item.url } style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>{ item.titulo }</Link>*/}
    <ul className="menus">
     {menuItens && menuItens.map(item=>
        <MenuItens itens={item} key={item.titulo}/>
        )
      }
    </ul>
     </div>
     </nav>
   
    {/*<nav className="navbar">
      <h1>Blogs Manager</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Novo Blog</Link>
        <Link to="/createAuthor" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Novo Autor</Link>
        <Link to="/criarCategoria" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Nova Categoria</Link>
        {<Link to="/criarCriterioBusca" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }} >Novo Criterio</Link>}
        
      </div>
      </nav>*/}
       </>
  );
}
 
export default Navbar;