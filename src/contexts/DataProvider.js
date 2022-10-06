import { useState, useEffect, useContext, createContext } from 'react'
import { getFirestore, getDoc, getDocs, collection, doc, addDoc, Timestamp, query, orderBy } from '@firebase/firestore'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const [posts, setPosts] = useState([])
    const db = getFirestore()

    useEffect(() => {
        /* fetch('http://127.0.0.1:5000/api/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data)
                console.log(data)
            }) */
        const getPosts = async function() {
            const collectionRef = collection(db, 'posts')
            // const collectionSnap = await getDocs(collectionRef)
            const q = query(collectionRef, orderBy('dateCreated', 'desc'))
            const collectionSnap = await getDocs(q)

            const postsArr = []

            collectionSnap.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                postsArr.push({
                    ...doc.data(),
                    id: doc.id
                })
            })

            setPosts(postsArr)
        }
        getPosts()
    }, [])

    const getPost = async function(id, callback) {
        /* fetch(`http://127.0.0.1:5000/api/post/${id}`)
            .then((res) => res.json())
            .then((data) => {
                callback(data)
                console.log(data)
            }) */
        const docRef = doc(db, "posts", id)
        const docSnap = await getDoc(docRef)

        const post = {
            ...docSnap.data(),
            id: docSnap.id
        }

        callback(post)
    }

    const addPost = async function(title, body) {
        const post = {
            title: title,
            body: body,
            dateCreated: Timestamp.now()
        }

        const collectionRef = collection(db, 'posts')
        const docRef = await addDoc(collectionRef, post)

        post.id = docRef.id

        setPosts([post, ...posts])
    }

    /* const getPokemon = function(pokemonId, callback) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then((res) => res.json())
            .then((data) => {
                callback(data)
                console.log(data)
            })
    } */

    const getPokemon = async function(pokemonId, callback) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        const data = await res.json()
        callback(data)
        console.log(data)
    }

    const value = {
        posts: posts,
        getPost: getPost,
        getPokemon: getPokemon,
        addPost: addPost
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}