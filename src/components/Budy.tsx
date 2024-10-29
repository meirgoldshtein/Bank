import React, { useState } from 'react'
import Nav from './Nav'
import Home from './Home'
import Transfer from './Transfer'
import Weather from './Weather'
type PageType = 'home' | 'transfer' | 'weather'
export default function Budy() {
    
    const [currentPage, setCurrentPage] = useState<PageType>('home')
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home />
            case 'transfer':
                return <Transfer />
            case 'weather':
                return <Weather />
            default:
                return <Home />
        }
    }
    return (
        <div className="budy">
            <Nav setPage={setCurrentPage} />
            <div className="content">
                {renderPage()}
            </div>
        </div>
    )
}