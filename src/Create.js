import { useState } from "react"
import { useHistory } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("vee")
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        const blog = { title, body, author }

        setIsPending(true)
        
        fetch("http://localhost:8001/blogs", {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
            history.push("/")
        })
    }
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={e =>setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>
                <label>Written by: </label>
                <select
                    value={author}
                    onChange={e=>setAuthor(e.target.value)}
                >
                    <option value="vee">Vee</option>
                    <option value="korn">Korn</option>
                </select>
                {!isPending &&<button>Add blog</button>}
                {isPending &&<button>Adding...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author }</p>
            </form>
        </div>
    )
}

export default Create
