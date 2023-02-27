import {useState, useEffect} from 'react'


function useProduct(url) {
    const [products, setProducts] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not fetch data")
                    }
                    return res.json()
                })
                .then(data => {
                    setProducts(data)
                    setError(false)
                    setIsPending(false)
                })
                .catch(err => {
                    setError(err.message)
                    setIsPending(false)
                })
        }, 1000)
    }, [url])
  return {products, isPending, error}
}

export default useProduct
