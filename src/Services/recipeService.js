
const url = 'http://localhost:3030/data/recipes';


export const getAll = () => {
    return fetch(url)
        .then(res => res.json())
        .then(result => {
            return result;
        })
        .catch(err => {
            console.log(err);
        })
}

export const getOne = (recipeId) => {
    return fetch(`${url}/${recipeId}`)
        .then(res => res.json())
        .then(recipe => {
            return recipe;
        })
        .catch(err => {
            console.log(err);
        })
}