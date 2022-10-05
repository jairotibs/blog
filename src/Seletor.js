import { useState } from "react"
import ListaCategoria from "./ListaCategoria";
import ListarAutores from "./ListarAutores";
//import useFetch from "./useFetch";

const Seletor = ({criteriosBusca, categorias, autores, funcaoCriterio, funcaoItem}) => {

    const [opcao, setOpcao] = useState('')
    {/*const { error : erro, isPending : pendente, data: criteriosBusca } = useFetch('http://localhost:8000/criteriosBusca');
    const { error : erros, isPending : pendencia, data: categorias } = useFetch('http://localhost:8000/categorias');
    const { error : errosAutores, isPending : pendenciaAutores, data: autores } = useFetch('http://localhost:8000/autores');*/}
    const [opcaoCategoria, setOpcaoCategoria] = useState('')
    const [opcaoAutor, setOpcaoAutor] = useState('')

    const exibirSegundoItem = (option) =>{
        console.log('a opcao e '+opcao)
        switch(option){
            case 'autor': return (<ListarAutores autor={opcaoAutor} funcao={setOpcaoAutor} autores={autores}/>);
            //case 'categoria': <ListaCategoria categoria={opcaoCategoria} funcao={setOpcaoCategoria} categorias={categorias}/>
            case 'categoria' : return (<ListaCategoria categoria={opcaoCategoria} categorias={categorias} funcao={setOpcaoCategoria} />);
           // case 'palavras-chave':<BuscaPalavraChave />
           
            default:  ;
        }

       {funcaoCriterio(option);}
 
       

    }
    /*useFetch(()=>{
       funcao()
    }, [opcao]
    )*/

    /*const funcao = ()=>{
        return(
            <select  onChange={e=>setOpcao(e.target.value)} >
                <option value="selecione">Selecione</option>
            {criteriosBusca && criteriosBusca.map(criterio=><option key={criterio.nome} value={criterio.nome.toLowerCase()}>{criterio.nome}</option>)}
            </select>
        )
    }*/

return(
    <>
    <select onChange={e=>setOpcao(e.target.value)} >
        <option value="selecione">Selecione</option>
        {criteriosBusca && criteriosBusca.map(criterio=><option key={criterio.nome} value={criterio.nome.toLowerCase()}>{criterio.nome}</option>)}
    </select>
    
    {/*funcao()*/}
    {console.log(opcao)}
    {console.log('bla '+opcaoCategoria)}
    {exibirSegundoItem(opcao)}
    </>
)
}
export default Seletor;