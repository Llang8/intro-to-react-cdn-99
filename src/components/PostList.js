import { useEffect, useState } from 'react';
import Post from './Post';

export default function PostList() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data)
                console.log(data)
            })
    }, [])

    return (
        <div>
            { posts.map((post) => <Post post={post} preview={true} key={post.id} />) }
        </div>
    )
}