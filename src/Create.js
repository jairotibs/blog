
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [categoria, setCategoria] = useState('')
  const [palavrasChave, setPalavrasChave] = useState('')
  const dataHoje = new Date();
  const [dataCadastro, setDataCadastro] = useState(dataHoje)

  const history = useHistory();
  

  const { error, isPending, data: autores } = useFetch('http://localhost:8000/autores');
  const { error : erro, isPending : pendente, data: categorias } = useFetch('http://localhost:8000/categorias');

  //atualiza a data, caso haja mudança no valor da data
  useEffect(()=>{
    setDataCadastro(dataCadastro);

  }, [dataCadastro]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author, categoria, palavrasChave, dataCadastro };

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }



  return (
 
    <div className="create">
      <h2>Add a New Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Categoria:</label>
        {/*<ListaCategoria categoria={categoria} categorias={categorias} funcao = {setCategoria}/>*/}
        <select value={categoria} 
                onChange={(e)=>setCategoria(e.target.value)}

        >
        
          {categorias && categorias.map(cat=>(<option key={cat.nomeCategoria.toLowerCase()} value={cat.nomeCategoria.toLowerCase()}>{cat.nomeCategoria}</option>))}
        </select>

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        
        <label>Palavras-chave</label>
        <input type="text" required value={palavrasChave} onChange={e=>setPalavrasChave(e.target.value)} />
        
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          {/*realiza a listagem dos autores.*/}
          {autores && autores.map(autor=>(<option key={autor.nome.toLowerCase()} value={autor.nome.toLowerCase()}>{autor.nome}</option>))}
         
        </select>
        <button>Add Blog</button>
      </form>
    </div>

  
  );
}
 
export default Create;