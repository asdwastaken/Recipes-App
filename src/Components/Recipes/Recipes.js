import './recipes.css';

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getAll } from "../../Services/recipeService";


export default function Recipes() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getAll()
            .then((result) => setRecipes(result));

    }, [])



    return (
        <div className="recipes">
            <div className="recipes-container">

                {recipes.map(x => {
                    return (
                        <Link className="recipe-card" key={x._id} to={`/recipes/${x._id}`}>
                            <img src={x.img} />
                            <p className='recipe-description'>{x.description.length > 40 ? `${x.description.slice(0, 40)}...` : `${x.description}`}</p>
                            <h3>{x.name}</h3>
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}