const ListarAutores = ({ autor, autores, funcao}) =>{
 
	return(
		<>
        
	    <select value={autor} onChange={(e)=>funcao(e.target.value)}>
          <option value="">Selecione</option> 
          {autores && autores.map(aut=>(<option key={aut.nome} value={aut.nome.toLowerCase()}>{aut.nome}</option>))}
        </select>
		
		{/*a partir daqui, é só filtrar*/}
		</>
	)
}
export default ListarAutores;