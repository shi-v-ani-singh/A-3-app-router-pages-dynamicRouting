import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-7 py-6 bg-neutral-900 '>
            <h3 className='text-2xl  font-bold text-white '>FashionStore</h3>
        
            <div className='flex items-center gap-12 text-white font-medium text-xl'>
                <Link href='/'>Home</Link>
                <Link href='/products'>Prouducts</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </div>
        </div>

    )
}

export default Navbar
