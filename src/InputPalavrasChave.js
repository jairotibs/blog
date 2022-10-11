
const InputPalavrasChave = ({funcao}) =>{

return(
    <input type="text" onChange={e=>funcao(e.target.value)}/>
    )

}
export default InputPalavrasChave;