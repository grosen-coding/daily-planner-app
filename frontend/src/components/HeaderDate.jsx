
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
        <div>
            <p> Today's Date : {newDate.toLocaleDateString()}</p>
            <p> Current Time : {newDate.toLocaleTimeString()}</p>

        </div>
    )
}

export default HeaderDate
