import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavButtons from '../../components/NavButtons'

export default function TopNav() {
    const { pathname } = useLocation();
  return (
    <div className="flex shadow-md">
        <div className="nl_container flex justify-between">
            <div className="flex">
                <Link to="/"><NavButtons active={pathname === "/"} name="Home" /></Link>
                <Link to="/video"><NavButtons active={pathname === "/video"} name="Video" /></Link>
            </div>
            <div className="flex py-3">
                <button className="py-2 bg-gray-200 text-lg flex items-center justify-center transition-colors duration-300 rounded font-semibold text-gray-700 cursor-pointer hover:bg-gray-300 active:scale-95 px-4">
                    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em"><circle cx="12" cy="12" r="2.5"></circle><circle cx="19.5" cy="12" r="2.5"></circle><circle cx="4.5" cy="12" r="2.5"></circle></svg>
                </button>
            </div>
        </div>
    </div>
  )
}
