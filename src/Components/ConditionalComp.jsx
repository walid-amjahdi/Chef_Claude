import { useState } from "react";

export function ConditionalComp()
{
    const [isShow, setIsShow] = useState(false)

    function handleClick()
    {
        setIsShow(prev => !prev)
    }

    return (
        <>
            <button onClick={handleClick} className="SubmitButton">{isShow ? "hide" : "show"}</button>
            {isShow && <h3>somthing</h3>}
        </>
    )
}