import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const MenuItens = ({itens}) =>{

  const[dropdown, setDropdown] = useState(false);


  
  {/*const mostrarSubMenus = () =>{
    console.log('entrou');
     {<Dropdown submenu={itens.submenu}/>};
  }*/}
//mecanismo para ocultar o 

useEffect(()=>{
  //setDropdown(dropdown)
  console.log('entrou no effect')
  if (!dropdown){
    ocultar();
    console.log('ocultou')
  }
},[dropdown]

);

  const ocultar = () =>{
     setDropdown(dropdown? !dropdown : dropdown)
     console.log('entrou no ocultar '+dropdown)
  }

    return(
     
  <li className="menu-items" >
        {itens.submenu ? (
                    <>
                        <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" :"false"} onClick={()=>setDropdown((prev)=>!prev)}>{itens.titulo}</button>
                        {console.log('o dropdown eh '+dropdown)}
                         <Dropdown submenu={itens.submenu} dropdown={dropdown}/>
                    </>  ) : 
                           
                           <Link to={itens.url} onClick={ocultar} >{itens.titulo}</Link>}
                           {console.log('valor'+`dropdown ${dropdown ? '' : 'notshow'}`)}
                           

  </li>
    )
}
export default MenuItens;