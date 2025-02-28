// Integro il sistema di routing
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Pages
import HomePage from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ListProduct from "./pages/ListProduct";
import SingleProduct from "./pages/SingleProduct";
import CreateProduct from "./pages/CreateProduct";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Definiamo una rotta genitore, */}
        <Route element={<DefaultLayout />}>

          {/* Definiamo le rotte figlie */}
          <Route index element={<HomePage />} />
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
