import React from 'react'
import {Link, useParams} from 'react-router-dom'

function ProductList({ products, title }) {
  return (
      <div className='product-container'>
      <h1>{title}</h1>
      <div className="product">
        {products.map(product => (
          <div className="product-preview" key={product.id}>
              <h2>{product.title}</h2>
              <hr style={{width: "20px", margin: "auto"}}/>
            <h4 style={{ color: "#002244", margin: "10px 0px" }}>{product.category}</h4>
            <img src={product.thumnail} alt="" />
            <Link to={`blog-details/${product.id}`}>
              <p>{product.description}</p>
              <h4 style={{marginTop: "10px", color: "red"}}>${product.price }</h4>
            </Link>
            </div>
        ))}   
      </div>
    </div>
  )
}

export default ProductList
