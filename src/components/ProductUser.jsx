// Importo l'utilizzo di Context e il GlobalContenxt
import { useContext } from "react";
import GlobalContext from './../contexts/GlobalContext'

import ProductCard from "./ProductCard";

const ProductUser = () => {

    // Destructuring
    const { articles } = useContext(GlobalContext);

    // Articoli
    return (
        <>
            {/* Importo i dati da Home.jsx */}
            {/* {props.articlesApp.map((article) => ( */}
            {articles.map((article) => (
                <ProductCard key={article.id} article={article} />
            ))
            }
        </>
    )

}

export default ProductUser