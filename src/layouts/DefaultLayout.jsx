// Componente Outlet
import { Outlet } from "react-router-dom";

// Componente layout
import Header from "./../components/Header";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}