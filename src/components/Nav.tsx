import React from 'react'
import Home from './Home'
type PageType = 'home' | 'transfer'| 'weather'
interface props {
    setPage:(x:PageType) => void
}

export default function Nav({setPage}:props) {
  return (
    <div className='nav'>
        <p onClick={() => setPage('home')}>לצפייה בחשבונך</p>
        <p onClick={() => setPage('transfer')}>העברת כספים</p>
        <p onClick={() => setPage('weather')}>לצפייה בתחזית מזג אוויר</p>
    </div>
  )
}
