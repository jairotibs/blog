const ListaCategoria = ({ categoria, categorias, funcao}) =>{
 
	return(
		<>
     
	    <select value={categoria} onChange={(e)=>funcao(e.target.value)}>
           <option value="">Selecione</option>
          {categorias && categorias.map(cat=>(<option key={cat.nomeCategoria} value={cat.nomeCategoria.toLowerCase()}>{cat.nomeCategoria}</option>))}
        </select>
		{/*a partir daqui, é só filtrar*/}
		</>
	)
}
export default ListaCategoria;