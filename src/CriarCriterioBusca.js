import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const CriarCriterioBusca = () =>{
    
    const[nome, setNome] = useState('')
    const history = useHistory()
    const criterioBusca = {nome}

    const cadastrarCriterio = (e) =>{
        e.preventDefault();


            fetch('http://localhost:8000/criteriosBusca',{
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(criterioBusca)
            }

            ).then(()=>{
                console.log(criterioBusca)
                history.push('/')
            }
            )
     
    }
    
    return(
        <div className="create">
        <form onSubmit={cadastrarCriterio}>
          <label>Criterio</label>
          <input type="text" required value={nome} onChange={(e)=>setNome(e.target.value)}/>
          <button>Cadastrar</button>
         </form>
      </div>
    )
}
export default CriarCriterioBusca;