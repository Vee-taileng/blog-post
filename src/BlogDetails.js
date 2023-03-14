import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useProduct from './useProduct'

function BlogDetails() {
  const { id } = useParams()
  const { products: blog, isPending, error } = useProduct('http://localhost:8000/products/' + id)
  const history = useHistory()
  
  const handleDeleteBlog = () => {
    fetch("http://localhost:8000/products/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/products")
    })
  }
  return (
    <div className='blog-details'>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h5>{blog.brand}</h5>
          <img src={blog.thumbnail} alt="" />
          <p>{blog.description}</p>
          <button onClick={handleDeleteBlog}>Delete blog</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
