import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarNavlink = () => {
    const navLinkStyles=({isActive})=>{
        return{
            textDecoration:isActive?'none':'underline',
            fontWeight:isActive?'bold':'normal'
        }


    }
  return (
   <>
 <nav>
  <ul className='display-flex flex'>
    <li><NavLink to='/' style={navLinkStyles}> Home</NavLink></li>
    <li><NavLink to='/about' style={navLinkStyles}>About</NavLink></li>
  </ul>
</nav>
 
   </>
  )
}

export default NavbarNavlink