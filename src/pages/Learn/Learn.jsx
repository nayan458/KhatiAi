import React from 'react'
import MainCmp from '../../components/MainCmp'
import Nav from '../../components/Nav'
import Learnings from '../../components/learn/Learnings'
// images
import farmer1 from '../../media/img/farmers/farmer1.jpg' 
import farmer2 from '../../media/img/farmers/farmer2.jpg' 
import farmer3 from '../../media/img/farmers/farmer3.jpg' 
import farmer4 from '../../media/img/farmers/farmer4.jpg' 
import farmer5 from '../../media/img/farmers/farmer5.jpg' 
import farmer6 from '../../media/img/farmers/farmer6.jpg' 

// this is dashboard

export default function KishanDashbord() {
  return (
    <>
    <Nav/>
    <MainCmp  
    comp={
        <div className='farmers-page'>
            <Learnings image={farmer1} name="Binay Deka"/>
            <Learnings image={farmer2} name="Moktar Ali Mondal"/>
            <Learnings image={farmer3} name="Kushal Konwar"/>
            <Learnings image={farmer4} name="Sanjay Bera"/>
            <Learnings image={farmer5} name="Baladev Patra"/>
            <Learnings image={farmer6} name="Rahul Gogoi"/>
        </div>
    }
     />

    </>
  )
}
