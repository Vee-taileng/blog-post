import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'

function Products() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setProducts(data)
            })
    }, [])

  return (
    <div>
      {products && <ProductList title="Featured Products" products={products}/>}
    </div>
  )
}

export default Products
