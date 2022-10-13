import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
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
    </nav>
  );
}
 
export default Navbar;