import React from 'react'

const Layout = ({children, bgColor, moreClassWithContainer}) => {
  return (
    
    <div className={bgColor}>
        <div className={`container m-auto ${moreClassWithContainer}`}>
             {children}
        </div>
    </div>
  )
}

export default Layout