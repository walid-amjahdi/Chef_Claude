import { useState } from "react"

export function Main()
{
    const [ingrediants,setIngrediants] = useState(["ing1","ing2","ing3"])

    const handleSubmit = (event) =>
    {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const ingrediant = formData.get("ingrediant")
        setIngrediants([...ingrediants,ingrediant])
    }

    return (
        <>
            <main className="MainContent" >
                <form onSubmit={handleSubmit}>
                    <input type="text" className="InputField" placeholder="Add the ingrediant ..." name="ingrediant"/>
                    <button type="submit" className="SubmitButton">+ Add</button>
                </form>
            </main>
            <ul className="IngrediantsList">
                {ingrediants.map((ing,index)=>(
                    <li key={index}>{ing}</li>
                ))}
            </ul>
        </>
    )
}