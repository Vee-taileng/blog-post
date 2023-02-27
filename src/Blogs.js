// import React, { useState } from 'react'
import MyBlogs from './MyBlogs';
import useBlogs from './useBlogs';


function Blogs() {
    const {data, isPending, error} = useBlogs('http://localhost:8000/products')

  return (
    <div className='my-blog'>
        {isPending && <p>Loading data...</p>}
        {error && <p>{error}</p>}
        {data && <MyBlogs title="Personal Blogs" blogs={data} />}
    </div>
  )
}

export default Blogs
