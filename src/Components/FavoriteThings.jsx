import { useState } from "react"

export function FavoriteThings()
{
    const [myFavorite,setMyFavorite] = useState([])
    const [favoriteThings,setFavoriteThings] = useState(["1","2","3","4"])

    function addThings()
    {
        setMyFavorite(prevThings => [...prevThings,"test"])
    }

    return (
        <>
            <button className="SubmitButton" 
            onClick={addThings}>
                +Add
            </button>
            <ul className="IngrediantsList">
                {myFavorite.map((thing,index)=>(
                    <li key={index}>{thing}</li>
                ))}
            </ul>
        </>
    )
}

