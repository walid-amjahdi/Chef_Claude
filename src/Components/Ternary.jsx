import { useState } from "react"

export function Ternary()
{
    const [isGoingOut ,setIsGoingOut] = useState(true)

    function toggleIsGoingOut()
    {
        setIsGoingOut((prev)=> !prev)
    }

    return (
        <>
            <h3>are you going out</h3>
            <button onClick={toggleIsGoingOut}>{isGoingOut ? "yes" : "no"}</button>
        </>
    )
}

