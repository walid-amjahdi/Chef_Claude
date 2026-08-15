import { useState } from "react"

export function Main()
{
    const [ingrediants,setIngrediants] = useState([])
    const [value,setValue] = useState("")

    const handleSubmit = (formData) =>
    {
        setIngrediants([...ingrediants,value])
        setValue("")
    }

    function typing(event)
    {
        setValue(event.target.value)
    }


    
    return (
        <>
            <main className="MainContent" >
                <form action={handleSubmit}>
                    <input type="text" className="InputField" placeholder="Example" name="ingrediant" value={value} onChange={typing}/>
                    <button type="submit" className="SubmitButton">+ Add </button>
                </form>
            </main>
            {(ingrediants.length > 0) && <> <ul className="IngrediantsList">
                {ingrediants.map((ing,index)=>(
                    <li key={index}>{ing}</li>
                ))}
            </ul>
            <div className="getRecipeDiv">
                <h4>The Recipe</h4>
                <button>Get Recipe :</button>
            </div>
            </>}
        </>
    )
}