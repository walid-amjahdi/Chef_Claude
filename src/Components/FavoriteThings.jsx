import { useState } from "react"

export function FavoriteThings()
{
    return (
        <>
            <form action="">
                <label htmlFor="userName">UserName : </label>
                <input type="text" name="userName" id="userName" />
                <br />
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" id="password" />
            </form>
        </>
    )
}

