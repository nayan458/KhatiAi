import React, { useEffect, useState } from 'react'
import MainCmp from '../../components/MainCmp'
import rice from '../../media/img/iot/rice.jpg'
import { Button } from '@mui/material'
import LineCharts from '../../components/iot/LineCharts'
import { Link } from 'react-router-dom'

export default function KishanDashbord() {

  const [pos, setpos] = useState([])
  const [weatherData, setWeatherData] = useState([])
  // const [weatherData, setWeatherData] = useState([])

  function getLocation() {
      navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    setpos([position.coords.latitude, position.coords.longitude])
  }

  // console.log(pos[0], pos[1])

  const API_KEY = '0654d5e67660c6b9bf8f57cf8bc9c2f0'
  const getCurrentWeatherInfo = async () =>{
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos[0]}&lon=${pos[1]}&appid=${API_KEY}&units=metric`
      let response =  await fetch(url)
      let data = await response.json()
      const {feels_like, humidity, temp, temp_max, temp_min} =await data.main;
      console.log(feels_like)
        setWeatherData([feels_like, humidity, temp, temp_max, temp_min])
    }

    // const weatherData = async () => {
    //   const data = await getCurrentWeatherInfo()
    //   console.log(data)
    // }   
    // weatherData()

    // const data = getCurrentWeatherInfo();
    // data
    // .then(data => {
    //   const {feels_like, humidity, temp, temp_max, temp_min} = data.main;
    // })


    useEffect(() => {
        getLocation()
        getCurrentWeatherInfo()
    },[])
    

  return (
    <MainCmp comp={
        <>
          <div className='w-full grid grid-cols-5 gap-2'>
            <div className='col-span-3 border-[2px] border-slate-400/90 rounded-lg p-2 '>
              <div>Products progess</div>
              <LineCharts/>
            </div>
            <div className='col-span-2 grid grid-cols-1 gap-1'>
              <div className='border-[2px] border-slate-400/90 rounded-lg grid grid-cols-5 p-2'>
                <div className='col-span-3 flex flex-col gap-2'>
                  <div className='h3'>Crop To Be Cultivated</div>
                  <div className='p1'>Rice</div>
                  <div>Joha (aromatic), Bora (Waxy), Chokuwa (semiwaxy), Red Bao (Deep and Floating)</div>
                  <div className='flex flex-col justify-start items-start '>
                  <Link to="/mart">
                    <Button>
                    <div className='btn'>
                      Buy Seeds
                    </div>
                    </Button>
                  </Link>
                  <Link to='/mart'>
                    <Button>
                    <div className='btn'>
                      Buy Furtilizers
                    </div>
                    </Button>
                  </Link>
                  </div>
                </div>
                <div className='col-span-2'>
                  <img src={rice} className='h-full rounded-md'/>
                </div>
              </div>
              <div className='border-[2px] border-slate-400/90 rounded-lg p-2'>
                    <div className='h3'>
                    Weather
                      {weatherData.map(({feels_like, humidity, temp, temp_max, temp_min}) => {
                        return (
                          <>
                          {console.log(humidity)}
                            <p>{feels_like}</p>
                            <p>{humidity}</p>
                            <p>{temp}</p>
                            {/* <p></p> */}
                          </>
                        )
                      })}
                    </div>
                    <div>
                        Overcast 23deg C
                    </div>
              </div>
            </div>
            {/* <div className='col-span-3 border-[2px] border-slate-400/90 rounded-lg'>
              <LongChart/>
            </div> */}
          </div>
        </>
    }/>
  )
}
 