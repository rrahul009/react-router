import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
 

const Home = () => {
    let navigate=useNavigate()
    
  return (
  <>
    <div><Link to='/about'> Home</Link></div> 
    <button onClick={()=>navigate('/about')}  >Navigate to other page</button>
  
     
  </>
  )
}

export default Home