
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const Create = () => {

  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [autor, setAutor] = useState('');
  const [categoria, setCategoria] = useState('')
  const [palavrasChave, setPalavrasChave] = useState('')
  const dataHoje = new Date(Date.now()).toLocaleString().split(',')[0];
  const [dataCadastro, setDataCadastro] = useState(dataHoje)
  const [datasAtualizacao, setDatasAtualizacao] = useState('')

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
    const blog = { titulo, conteudo, autor, categoria, palavrasChave, dataCadastro, datasAtualizacao };

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
      <h2>Adicione um Novo Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Título:</label>
        <input 
          type="text" 
          required 
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label>Categoria:</label>
        {/*<ListaCategoria categoria={categoria} categorias={categorias} funcao = {setCategoria}/>*/}
        <select value={categoria} 
                onChange={(e)=>setCategoria(e.target.value)}

        >
          
          {categorias && categorias.map(cat=>(<option key={cat.nomeCategoria.toLowerCase()} value={cat.nomeCategoria.toLowerCase()}>{cat.nomeCategoria}</option>))}
        </select>

        <label>Conteúdo:</label>
        <textarea
          required
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
        ></textarea>
        
        <label>Palavras-chave</label>
        <input type="text" required value={palavrasChave} onChange={e=>setPalavrasChave(e.target.value)} />
        
        <label>Autor:</label>
        <select
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        >
          {/*realiza a listagem dos autores.*/}
          {autores && autores.map(autor=>(<option key={autor.nome.toLowerCase()} value={autor.nome.toLowerCase()}>{autor.nome}</option>))}
         
        </select>
        <button>Cadastrar</button>
      </form>
    </div>

  
  );
}
 
export default Create;