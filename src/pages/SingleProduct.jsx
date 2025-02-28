import axios from "axios";
import { useState, useEffect } from 'react';
// estrarre parametri dalla URL
import { useParams } from "react-router-dom";
// Uso link per paginazione (+ -)
import { Link } from "react-router-dom";



export default function SingleProduct() {

    // destructuring per ritornare l'id (proprietà id dell'oggetto param)
    const { id } = useParams();

    //  settaggio dello stato del componente
    const [post, setPost] = useState({});

    // funzione di chiamata verso la rotta store
    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
    }

    useEffect(
        () => fetchPost(),
        [id])


    return (
        <>

            {/* Navigazione tra posts */}
            <nav className="nav-detail">
                <Link className="arrow" to={`/posts/${parseInt(id) - 1}`}>&#8592;</Link>


                {/* Dettagli */}
                <div>
                    <h1>{post.title}</h1>
                    <img className="detail" src={post.image} alt={post.title} />
                    <p>{post.content}</p>
                    {/* <p>{post.tags.join(", ")}</p> */}
                </div>
                <Link className="arrow" to={`/posts/${parseInt(id) + 1}`}>&#8594;</Link>
            </nav>


        </>
    );
}