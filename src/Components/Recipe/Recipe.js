import './recipe.css'

import { useEffect, useState } from "react";
import { getOne } from "../../Services/recipeService";
import { useParams } from "react-router-dom";


export default function Recipe() {
    const [recipe, setRecipe] = useState({});

    const recipeId = useParams().recipeId;

    useEffect(() => {
        getOne(recipeId)
            .then(result => setRecipe(result));
    }, [])

    return (
        <div className="recipe">
            <div className="recipe-container">
                <img src={recipe.img} className="recipe-image"/>

            </div>

        </div>
    )
}