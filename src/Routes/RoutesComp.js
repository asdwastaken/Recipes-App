import { Routes, Route } from "react-router-dom"
import Home from "../Components/Home/Home"
import Login from "../Components/Login/Login"
import Register from "../Components/Register/Register"
import Recipes from "../Components/Recipes/Recipes"
import Recipe from "../Components/Recipe/Recipe"

export default function RoutesComp() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/recipes" element={<Recipes />}></Route>
            <Route path="/recipes/:recipeId" element={<Recipe />}></Route>

        </Routes>
    )
}