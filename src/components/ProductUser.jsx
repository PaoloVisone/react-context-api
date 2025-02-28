import ProductCard from "./ProductCard";

import { useState, useEffect } from "react";

// Importo axios
import axios from "axios"

// export default function input() {
const ProductUser = () => {

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

    // Articoli
    return (
        <>
            {articles.map((article) => (
                <ProductCard key={article.id} article={article} />
            ))
            }
        </>
    )

}

export default ProductUser