import { useState } from "react"

export function Notification()
{
    const [notifications,setNotifications] = useState(["a","b"])
    return (
        <>
            {(notifications.length > 0) && <h3>you have notifications !!!</h3>}        
            {(notifications.length === 0) && <h3>you have no notifications !!!</h3>}        
        </>
    )
}