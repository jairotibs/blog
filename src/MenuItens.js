import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const MenuItens = ({itens}) =>{

  const[dropdown, setDropdown] = useState(false);


  
  {/*const mostrarSubMenus = () =>{
    console.log('entrou');
     {<Dropdown submenu={itens.submenu}/>};
  }*/}
    return(
     
  <li className="menu-items" >
        {itens.submenu ? (
                    <>
                        <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" :"false"} onClick={()=>setDropdown((prev)=>!prev)}>{itens.titulo}</button>
                        {console.log('o dropdown eh '+dropdown)}
                        <Dropdown submenu={itens.submenu} dropdown={dropdown}/>
                    </>  ) : 
                           <Link to={itens.url} className={`dropdown ${dropdown ? 'show' : ''}`}>{itens.titulo}</Link>}
  </li>
    )
}
export default MenuItens;