import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-7 py-3 border-b border-neutral-200 bg-white '>
            <h3 className='text-2xl text-neutral-900 font-bold '>FashionStore</h3>
        
            <div className='flex items-center gap-12 text-neutral-700 font-medium'>
                <Link href='/'>Home</Link>
                <Link href='/products'>Prouducts</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </div>
        </div>

    )
}

export default Navbar
