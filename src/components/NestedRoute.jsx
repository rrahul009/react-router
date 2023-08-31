import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NestedRoute = () => {
  return (
    <>
      <li>
        <Link to='list1'> list1</Link>
      </li>
      <li>
        <Link to='list2'> list2</Link>
      </li>
      <Outlet />
    </>
  )
}

export default NestedRoute