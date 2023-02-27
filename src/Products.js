import React from 'react'
import ProductList from './ProductList'
import useProduct from './useProduct'

function Products() {
  const {products, isPending, error} = useProduct('http://localhost:8000/products')

  return (
    <div>
      {isPending && <p>Loading products...</p> }
      {error && <p>{error}</p>}
      {products && <ProductList title="Featured Products" products={products}/>}
    </div>
  )
}

export default Products
