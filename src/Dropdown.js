import { useEffect } from "react";
import { Link } from "react-router-dom";


const Dropdown = ({submenu, dropdown}) =>{

    return (
        <ul className={`dropdown ${dropdown ? '' : 'notshow'}`}>
            {console.log(`dropdown ${dropdown ? 'notshow' : ''}`)}
             {submenu && submenu.map(sub =>(<li className="menu-items" key={sub.titulo}><Link  to={sub.url}>{sub.titulo}</Link></li>))}
        </ul>
    )
}
export default Dropdown;