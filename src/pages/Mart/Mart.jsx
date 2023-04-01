import React from 'react'
import fertilizers from '../../db/Fertilizer'
import Nav from '../../components/Nav'
import MainCmp from '../../components/MainCmp'
import MultiActionAreaCard from '../../components/mart/MuiComponents/MultiActionAreaCard'

export default function Mart() {
  return (
    <>
        <Nav/>
        <MainCmp
            
            comp={
                <>
                <div className='h1 text-start mt-3'>Products</div>
                <br/>
                <div className='w-full flex justify-center align-middle items-center gap-2'>
                    <div className='grid grid-cols-3 overflow-x-hidden gap-2'>

                    {
                      fertilizers.map(({name,price,img,desc})=>{
                        return(
                          <>
                          <MultiActionAreaCard name={name} price={price} image ={img} desc={desc}/>
                          </>
                        )
                      })
  
                    }
                    </div>
              </div>
                </>
            }
        />

    </>
  )
}
