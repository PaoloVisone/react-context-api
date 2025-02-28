import Navbar from "./Navbar"

export default function Header(props) {

    // dati ricavati per la gestione dei link della Navbar
    const links = [
        { id: 1, text: 'Home', url: '/', current: true },
        { id: 2, text: 'About', url: '/AboutUs', current: false },
        { id: 3, text: 'ListProduct', url: '/posts', current: false },
        { id: 4, text: 'CreateProduct', url: '/posts/create', current: false },

    ];


    return (
        <header>
            <Navbar linksProp={links} />
        </header>
    )
}