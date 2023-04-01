import React from 'react'
import Nav from './Nav'

export default function MainCmp({comp}) {
  return (
    <>
    <Nav/>
    <div className='w-screen h-screen pt-24 '>
                <div className='w-full h-full px-40 overflow-x-hidden  '>
                    {comp}
                </div>
        </div>
    </>
  )
}
