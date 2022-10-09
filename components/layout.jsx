import React from 'react'
import Header from './Header/Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='pt-16'>{children}</main>
        </>
    )
}

export default Layout