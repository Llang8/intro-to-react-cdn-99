import { useContext } from "react"
import { DataContext } from "../contexts/DataProvider"

export default function PostForm() {
    const { addPost } = useContext(DataContext)

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.target)
        const formData = new FormData(event.target)
        const title = formData.get('title')
        const body = formData.get('body')
        addPost(title, body)
        event.target.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" name="title" />
            </div>
            <div className="form-group">
                <label htmlFor="body">Body</label>
                <input type="text" className="form-control" name="body" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}