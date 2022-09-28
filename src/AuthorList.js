const BlogList = ({autores})=>{
    return(
        <div className="blog-list">
        {autores.map(autor=>(
           <div className="blog-preview" id={autor.id}>
                <Link to={`/autores/${autor.id}`}>
                    <p></p>
                </Link>
           </div> 
        ))}

        </div>
    )
}
export default BlogList;