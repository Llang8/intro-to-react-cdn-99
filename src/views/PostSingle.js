import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';

export default function PostSingle() {
    const [post, setPost] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/api/post/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data)
                console.log(data)
            })
    }, [])

    return (
        <div>
            <h1>Post Single: {id}</h1>
            <Post post={post} />
        </div>
    )
}