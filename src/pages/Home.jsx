// Importo i prodotti che l'utente può vedere
import ProductUser from "./../components/ProductUser"

// HOMEPAGE 
export default function Home(props) {
    return (
        /* Importo i dati da App.jsx */
        <ProductUser articlesApp={props.articlesHome} />
    )
}