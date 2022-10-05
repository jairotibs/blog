import { useEffect, useState } from "react"

const Recurso = (dir) => {

    const[dominio, setDominio] = useState('http://localhost:8000/')
    const[diretorio, setDiretorio] = useState('')
    const[url,setURL] = useState('')

    //seta o endpoint uma vez. Realiza nova atualização de dado apenas quando o valor do diretório é mudado.
    useEffect(()=>{
        //console.log(dir);
        setDiretorio(dir);
        setURL(dominio+diretorio);
    },[diretorio]

    )

    return {url}
}
export default Recurso;