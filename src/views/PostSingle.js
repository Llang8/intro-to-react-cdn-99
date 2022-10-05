import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import { DataContext } from '../contexts/DataProvider';

export default function PostSingle() {
    const [post, setPost] = useState({})
    const { id } = useParams()
    const { getPost } = useContext(DataContext)

    useEffect(() => {
        getPost(id, setPost)
    }, [])

    return (
        <div>
            <h1>Post Single: {id}</h1>
            <Post post={post} />
        </div>
    )
}