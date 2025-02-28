// Integro il sistema di routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
// // Integro il sistema di stato e effect
import { useState, useEffect } from "react";

// Pages
import HomePage from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ListProduct from "./pages/ListProduct";
import SingleProduct from "./pages/SingleProduct";
import CreateProduct from "./pages/CreateProduct";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

import './App.css'


// Importo axios
import axios from "axios"

function App() {

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

  return (
    <BrowserRouter>
      <Routes>

        {/* Definiamo una rotta genitore, */}
        <Route element={<DefaultLayout />}>

          {/* Definiamo le rotte figlie */}
          {/* Esporto i dati dell'array (articles) */}
          <Route index element={<HomePage articlesHome={articles} />} />

          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/posts">
            <Route index element={<ListProduct />} />
            <Route path=":id" element={<SingleProduct />} />
            <Route path="create" element={<CreateProduct />} />
          </Route>
        </Route>
      </Routes>

    </BrowserRouter>
  );

}

export default App
