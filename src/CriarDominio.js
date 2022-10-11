import { useState } from "react";
import { useHistory } from "react-router-dom";
import Recurso from "./Recurso";

const CriarDominio = () =>{
 
    const [dominio, setDominio] = useState('')
    const [valido, isValido] = useState('')
    const {url} = Recurso('recursos')
    const history = useHistory();

    const submit = (e) =>{
        e.preventDefault();
        const recurso = {dominio, valido}
        console.log('aqui'+url)
        fetch(url,{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recurso) 
        }
           
        ).then(()=>{
            history.push('/')
        })
    }

    return(

       <div className="create">
        <h2>Criar Domínio</h2>
        <form onSubmit={submit}>
            <label>Dominio:</label>
            <input type="text" required value={dominio} onChange={(e)=>{setDominio(e.target.value)}}></input>
            <label>Valido:</label>
            <select required value={valido} onChange={(e)=>{isValido(e.target.value)}}>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
            <button>Cadastrar</button>
        </form>
        </div>
    )
}
export default CriarDominio;