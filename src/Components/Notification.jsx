import { useState } from "react"

export function Notification()
{
    const [notifications,setNotifications] = useState([])

    function showNotifications()
    {
        if(notifications.length === 0)
            return <h3>you have no notifications !!!</h3>
        else if(notifications.length === 1)
            return <h3>you have 1 notification !!!</h3>
        else 
            return <h3>you have {notifications.length} notifications !!!</h3>
    }
    return (
        <>
            {showNotifications()}        
        </>
    )
}