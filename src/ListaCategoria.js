const ListaCategoria = ({ categoria, categorias, funcao}) =>{
 
	return(
		<>
        {console.log('entrouuuu jjj')}
	    <select value={categoria} onChange={(e)=>funcao(e.target.value)}>
           <option value="">Selecione</option>
          {categorias && categorias.map(cat=>(<option key={cat.nomeCategoria} value={cat.nomeCategoria.toLowerCase()}>{cat.nomeCategoria}</option>))}
        </select>
		{console.log('entrouuuu jjj '+categoria)}
		{/*a partir daqui, é só filtrar*/}
		</>
	)
}
export default ListaCategoria;