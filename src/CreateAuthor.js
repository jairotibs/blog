import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateAuthor = ()=>{
    const[nome, setNome] = useState('')
    
    const[bio, setBio] = useState('')
    const autor = {nome,bio}
    
    const history = useHistory();

    const criarAutor = (e)=>{
        e.preventDefault();

        fetch('http://localhost:8000/autores',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(autor)
        }).then(()=>{
           // console.log(autor.nome)
            history.push('/')
        })
    }

return(

    <div className="create">
        <h2>Adicionar Novo Autor</h2>
           <form onSubmit={criarAutor}>
                <label>Nome:</label>
                <input 
                type="text" 
                 required 
                 value={nome}
                 onChange={(e) => setNome(e.target.value)}
                />
                <label>Bio:</label>
                <input 
                type="text" 
                 required 
                 value={bio}
                 onChange={(e) => setBio(e.target.value)}
                />
                <button>Cadastrar</button>
           </form>
    </div>
)
}
export default CreateAuthor;