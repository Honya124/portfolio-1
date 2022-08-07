import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

function Portfolio() {
    const mywork=[
        {
            id:1,
        ima:arrayDestruct,
        },
        {
            id:2,
        ima:installNode
        },
        {
            id:3,
        ima:navbar
        },
        {
            id:4,
        ima:reactParallax
        },
        {
            id:5,
        ima:reactSmooth
        },
        {
            id:6,
        ima:reactWeather
        },
        
    
    ]
    
  return (
    <div name="portfolio" className='w-full text-white bg-gradient-to-b from-black via-black 
    to-gray-800 md:h-screen '>
      <div className='w-full h-full max-w-screen-lg mx-auto '>
        <div className='p-4'>
            <p className='font-bold text-4xl border-b-4 inline border-gray-600'> Portfolio</p>
            <p className='mt-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 mx-auto gap-8'>
        {mywork.map(({id,ima})=>(
            <div key={id} className='shadow-md shadow-gray-400 '>
                <img src={ima} alt="no Image" className='hover:scale-105 duration-200 rounded-lg px-12 sm:px-0' />
                <div className='flex justify-center items-center'>
                    <button className='px-6 py-3 hover:scale-105 duration-200 w-1/2 m-4 '>Demo</button>
                    <button className='px-6 py-3 hover:scale-105 duration-200 w-1/2 m-4 '>Code</button>
                </div>
            </div>
        ))}
            

        </div>
      </div>
    </div>
  )
}

export default Portfolio
