import React from 'react'
import TopNav from './inc/TopNav'

export default function Master({children}) {
  return (
    <div>
        <TopNav />
        <div className="py-10 px-4 nl_container">
            {children}
        </div>
    </div>
  )
}
