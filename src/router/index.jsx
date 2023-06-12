import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Common/Layout/Layout";
import ProtectedRouter from "../components/Common/ProtectedRouter/ProtectedRouter";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import { pokedexLoader } from "./loaders/pokedexLoader";
import PokemonDetails from "../pages/PokemonDetails/PokemonDetails";
import PageNotFound from "../components/PageNotFound/PageNotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/pokedex",
        element: <ProtectedRouter>
                    <Layout/> 
                </ProtectedRouter>,
        children: [
            {
                path: "",
                element: <Pokedex/>,
                loader: pokedexLoader, 
            },
            {
                path: ":pokemonId",
                element: <PokemonDetails/> ,
            },
           
        ]
    },
    {
        path: "/config",
        element: <h1>Ruta de config</h1>,
    },
    {
        path: "*",
        element: <PageNotFound/>
    }



]);