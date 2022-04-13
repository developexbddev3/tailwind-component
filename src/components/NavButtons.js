import React from 'react'

export default function NavButtons({name, active}) {
  return (
    <div className="py-2 relative">
        <button className="py-3 text-lg transition-colors duration-300 active:scale-95 rounded font-semibold text-gray-500 cursor-pointer hover:bg-gray-200 px-4">
            <span>{name}</span>
        </button>
        {active && <div className="block h-[3px] bg-blue-400 w-full absolute bottom-0 rounded-tl-sm rounded-tr-sm"></div>}
    </div>
  )
}
