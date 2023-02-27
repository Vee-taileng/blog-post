import React, {useState, useEffect} from 'react'
import BlogList from './BlogList'


function Home() {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8001/blogs")
                .then(res => {
                    if (!res.ok) {
                    throw Error("Could not find the data you requested")
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)
                setError(false)
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)
            })
        }, 1000)
    }, [])

    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="All blogs"/>}
        </div>
  )
}

export default Home
