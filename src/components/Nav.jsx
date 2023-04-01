import React from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../media/logo/Logo'
import KhetAILogo from '../media/logo/KhetiAILogo'

export default function Nav() {
    
  return (
    <>
        <nav className='flex w-screen flex-cols bg-slate-50/30 backdrop-blur-md justify-between items-center px-40 py-6 shadow-sm text-lg fixed z-50'>
            <div>
            <Link to='/'>
                <KhetAILogo/>
            </Link>
            </div>
            <div>
                <ul className='flex gap-10 '>
                    <Link to='/home' className='font-bold cursor-pointer outline-none'>home</Link>
                    <Link to='/' className='hover:font-bold cursor-pointer outline-none'>dashboard</Link>
                    <Link to='/learn' className='hover:font-bold cursor-pointer outline-none'>connect to farmers</Link>
                    <Link to='/mart' className='hover:font-bold cursor-pointer outline-none'>mart</Link>
                    {/* <Link to='/discussion' className='hover:font-bold cursor-pointer outline-none'>discussion forums</Link> */}
                </ul>
            </div>
                    {/* <Link to='/login' className='bg-[#82dc6d] text-black px-6 py-2 rounded-3xl'>login</Link> */}
        </nav>
    </>
    )
}
