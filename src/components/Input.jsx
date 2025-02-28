import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importo axios
import axios from "axios"

// Variabile iniziale dell'articolo
const articleData = {
    id: "",
    title: "",
    image: "",
    content: "",
    tags: []
}

// export default function input() {
const Input = () => {

    // Inserimento nuovo articolo
    const [newArticle, setNewArticle] = useState(articleData);

    //Funzione per gestire i campi 
    function handleData(e) {
        // gestione del value a seconda del tipo di input
        const value = e.target.title === "tags" ? e.target.value.split(",") : e.target.value;

        setNewArticle((currentNewArticle) => ({
            ...currentNewArticle,
            [e.target.title]: value,
        }));
    }

    // utilizzo del navigate
    const navigate = useNavigate();

    // Funzione il submit del form
    function handleSubmit(e) {
        e.preventDefault();

        // chiamata verso la API in post con invio dati nuova pizza
        axios.post("http://localhost:3000/posts", newArticle)
            .then((res) => {
                // uso la risposta dell'API per creare il nuovo array
                // setListArticles((articles) => [...articles, res.data])
                navigate("/posts")
            }
            )
            .catch(err => console.log(err))


        // setListArticles(
        //     (articles) =>
        //         [...articles,
        //         {
        //             id: articles.length === 0 ? 1 : articles[articles.length - 1].id + 1,
        //             ...newArticle
        //         }
        //         ]
        // );

        // resetto il form
        setNewArticle(articleData);
    }

    // Form Articoli
    return (
        <>
            <div id="content">

                <div id="input-box">

                    <h1>INSERISCI IL TUO ARTICOLO</h1>

                    <form action="#" onSubmit={handleSubmit}>

                        <input
                            type="text"
                            title="title"
                            value={newArticle.title}
                            onChange={handleData}
                            placeholder="Titolo"
                            required
                        />

                        <input
                            type="text"
                            title="image"
                            value={newArticle.image}
                            onChange={handleData}
                            placeholder="Imagine"
                        />

                        <input
                            type="text"
                            title="tags"
                            value={newArticle.tags}
                            onChange={handleData}
                            placeholder="Tags"
                        />

                        <textarea
                            type="text"
                            title="content"
                            value={newArticle.content}
                            onChange={handleData}
                            placeholder="Contenuto..."
                            required
                        ></textarea>

                        <div id="button">
                            <button className="btn">Genera</button>
                        </div>
                    </form>
                </div>

            </div >
        </>
    )

}

export default Input