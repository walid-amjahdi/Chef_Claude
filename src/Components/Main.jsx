import { useState } from "react"

export function Main()
{
    const [ingrediants,setIngrediants] = useState(["ing1","ing2","ing3"])
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
            <ul className="IngrediantsList">
                {ingrediants.map((ing,index)=>(
                    <li key={index}>{ing}</li>
                ))}
            </ul>
        </>
    )
}