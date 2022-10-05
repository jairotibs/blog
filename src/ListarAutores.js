const ListarAutores = ({ autor, autores, funcao}) =>{
 
	return(
		<>
        {console.log('entrouuuu jjj')}
	    <select value={autor} onChange={(e)=>funcao(e.target.value)}>
          <option defaultValue="">Selecione</option> 
          {autores && autores.map(aut=>(<option key={aut.nome} value={aut.nome.toLowerCase()}>{aut.nome}</option>))}
        </select>
		{console.log('entrouuuu jjj '+autor)}
		{/*a partir daqui, é só filtrar*/}
		</>
	)
}
export default ListarAutores;