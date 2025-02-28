import ProductCard from "./ProductCard";

const ProductUser = (props) => {

    // Articoli
    return (
        <>
            {/* Importo i dati da Home.jsx */}
            {props.articlesApp.map((article) => (
                <ProductCard key={article.id} article={article} />
            ))
            }
        </>
    )

}

export default ProductUser