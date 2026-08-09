import { useState } from "react"

export function Ternary()
{
    let isGoingOut = false 
    return (
        <>
            <h3>are you going out</h3>
            <h3>{isGoingOut ? "yes" : "no"}</h3>
        </>
    )
}

