import { useState, useEffect, useContext, createContext } from 'react'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data)
                console.log(data)
            })
    }, [])

    const getPost = function(id, callback) {
        fetch(`http://127.0.0.1:5000/api/post/${id}`)
            .then((res) => res.json())
            .then((data) => {
                callback(data)
                console.log(data)
            })
    }

    const value = {
        posts: posts,
        getPost: getPost
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}