import { useState } from "react"

export function Ternary()
{
    let isGoingOut = true 
    let answer = isGoingOut? "yes" : "no"
    return (
        <>
            <h3>are you going out</h3>
            <h3>{answer}</h3>
        </>
    )
}

