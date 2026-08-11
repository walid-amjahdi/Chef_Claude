import { useState } from "react"

export function FavoriteThings()
{
    function logIn(formData)
    {
        console.log(formData.get("userName"))
    }
    return (
        <>
            <form action={logIn}>
                <label htmlFor="userName">UserName : </label>
                <input type="text" name="userName" id="userName" />
                <br />
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" id="password" />
                <button>log in</button>
            </form>
        </>
    )
}

