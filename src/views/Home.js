import PostList from '../components/PostList'
import PostForm from '../components/PostForm'

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <PostForm />
            <PostList />
        </div>
    )
}