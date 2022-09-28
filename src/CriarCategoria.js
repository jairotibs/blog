import { useState } from "react";
import { useHistory } from "react-router-dom";

const CriarCategoria = () =>{
    const [nomeCategoria, setNomeCategoria] = useState('');
    const [descricao, setDescricao] = useState('');

    const categoria = {nomeCategoria, descricao};
    const history = useHistory();
    const criarCategoria = (e)=>{
        e.preventDefault();

        fetch('http://localhost:8000/categorias',{
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(categoria)
        }

        ).then(()=>{
            history.push('/')
        })
    }
    return(
      <form onSubmit={criarCategoria}>
        <div className="create">
            <h2>Adicionar Nova Categoria</h2>
            <label>Nome:</label>
            <input type="text" required value={nomeCategoria} onChange={(e)=>setNomeCategoria(e.target.value)} />
            <label>Descrição:</label>
            <input type="text" required value={descricao} onChange={(e)=>setDescricao(e.target.value)} />
            <button>Cadastrar</button>
       </div>
      </form>
    );
}
export default CriarCategoria;