import React from 'react'

const Nav = ({children}) => {
  return (
    <nav className="">
    <ul className="">
      {children}
    </ul>
  </nav>
  )
}

export default Nav