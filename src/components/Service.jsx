import React from 'react'
import { useNavigate } from 'react-router-dom'

const Service = () => {
    let navigate=useNavigate()
    const handleClick=()=>{
        navigate(-1)
    }

  return (
   <>
   <button onClick={handleClick}>go to just previous page</button>
   </>
  )
}

export default Service