import React from 'react'

function MyBlogs({ blogs, title }) {
  return (
    <div>
          <h2>{title}</h2>
          {blogs.map(blog => (
              <div className="blog" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.description }</p>
              </div>
          ))}
    </div>
  )
}

export default MyBlogs
