import React from 'react'

function ProductList({products, title}) {
  return (
      <div className='product-container'>
        <h1>{title }</h1>
        {products.map(product => (
            <div className="product-preview" key={product.id}>
                <h2>{product.title}</h2>
            </div>
        ))}   
    </div>
  )
}

export default ProductList
