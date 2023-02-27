import { useState, useEffect } from "react"

const useBlogs = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(true)
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)
            })
        }, 1000)
    }, [url])

    return {data, isPending, error}
}

export default useBlogs