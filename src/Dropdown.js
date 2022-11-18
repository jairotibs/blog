import { Link } from "react-router-dom";

const Dropdown = ({submenu, dropdown}) =>{

    return (
        <ul className={`dropdown ${dropdown ? 'show' : ''}`}>
            {console.log(`dropdown ${dropdown ? 'show' : ''}`)}
            {submenu.map(sub =>(<li className="menu-items"><Link  to={sub.url}>{sub.titulo}</Link></li>))}
        </ul>
    )
}
export default Dropdown;