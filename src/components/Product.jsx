import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Importo axios
import axios from "axios"

// export default function input() {
const Product = () => {

    // Stato dell'articolo (gestisce l'arrey di articoli)
    const [articles, setListArticles] = useState([]);

    // funzione di gestione chiamata all'API
    function fetchArticles() {
        axios.get("http://localhost:3000/posts")
            .then((res) =>
                setListArticles(res.data))
    }
    // richiamo la funzione di richiesta dati al caricamento del componente
    useEffect(fetchArticles, []);

    // Cancello articolo
    function deleteArticle(idArticle) {
        const updatedArticle = articles.filter(
            (article) => {
                return article.id !== idArticle;
            }
        );
        // Rotta delete
        axios.delete(`http://localhost:3000/posts/${idArticle}`)
            .then(res =>
                console.log(res),
                setListArticles(updatedArticle)
            )
            .catch(err => console.log(err)
            )
    }

    // Articoli
    return (
        <>
            <div id="content">

                {/* //lista dei articoli */}

                {/* Se non ci sono articoli */}

                {
                    articles.length === 0 ?
                        <h2>Non ci sono articoli</h2>
                        :
                        <div id="content-art">
                            {articles.map((article) => (

                                <div className="article-list" key={article.id}>

                                    <h3>{article.title}</h3>
                                    <img src={article.image} alt={article.title} />
                                    <Link to={`/posts/${article.id}`}>Dettagli</Link>
                                    <p>{article.content}</p>
                                    <span>{article.tags.join(", ")}</span>

                                    {/* Delete button */}
                                    <div className="content-btn">
                                        <button className="btn" onClick={() => deleteArticle(article.id)}>
                                            Elimina
                                        </button>
                                    </div>

                                </div>
                            ))
                            }
                        </div>
                }
            </div >
        </>
    )
}

export default Product