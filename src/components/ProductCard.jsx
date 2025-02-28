import { Link } from "react-router-dom";

const ProductCard = (props) => {

    // Destructuring
    const { article } = props;

    // Articoli
    return (
        <>
            <div id="content">

                {/* lista articoli */}

                <div id="content-art">


                    <div className="article-list" key={article.id}>

                        <h1>{article.title}</h1>
                        <img src={article.image} alt={article.title} />
                        <Link to={`/posts/${article.id}`}>Dettagli</Link>
                        <p>{article.content}</p>
                        <span>{article.tags.join(", ")}</span>

                    </div>

                </div>

            </div >
        </>
    )
}

export default ProductCard