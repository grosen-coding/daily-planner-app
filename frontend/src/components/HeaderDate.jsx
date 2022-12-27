
import  React, { useState , useEffect } from 'react'

export const HeaderDate = () => {

    const [newDate,setNewDate] = useState(new Date());
    
    useEffect(() => {
        let timer = setInterval(()=>setNewDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <>
            <p> <strong>Today's Date :</strong> {newDate.toLocaleDateString()}</p>
            <p> <strong>Current Time :</strong> {newDate.toLocaleTimeString()}</p>

        </>
    )
}

export default HeaderDate
