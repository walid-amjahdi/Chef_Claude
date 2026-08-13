import { useState } from "react"

export function Notification()
{
    const [notifications,setNotifications] = useState([1,2,3,5])

    function showNotifications()
    {
        if(notifications.length === 0)
            return "you have no notifications !!!"
        else if(notifications.length === 1)
            return "you have 1 notification !!!"
        else 
            return "you have " + notifications.length + " notifications !!!"
    }
    return (
        <>
            <h3>{showNotifications()}</h3>      
        </>
    )
}