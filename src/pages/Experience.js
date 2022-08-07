import React from 'react'
import css from '../assets/css.png'
import github from '../assets/github.png'
import graphql from '../assets/graphql.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import nextjs from '../assets/nextjs.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'


function Experience() {

  const links=[
    {
      id:1,
      src:css,
      title:"CSS",
      style:"shadow-blue-500"
    },
    {
      id:2,
      src:tailwind,
      title:"Tailwind CSS",
      style:"shadow-cyan-700"
    },
    {
      id:3,
      src:html,
      title:"HTML",
      style:"shadow-orange-500"
    },
    {
      id:4,
      src:github,
      title:"GitHub",
      style:"shadow-gray-500"
    },
    {
      id:5,
      src:graphql,
      title:"Graphql",
      style:"shadow-pink-500"
    },
    {
      id:6,
      src:javascript,
      title:"JavaScript",
      style:"shadow-yellow-500"
    },
    {
      id:7,
      src:nextjs,
      title:"Next JS",
      style:"shadow-gray-500"
    },
    {
      id:8,
      src:react,
      title:"React",
      style:"shadow-cyan-500"
    }
  ]
  return (
    <div name="experience" className='p-4 w-full md:h-screen bg-gradient-to-b from-black via-black  text-white 
    to-gray-800'>
     <div className='max-w-screen-lg w-full h-full flex flex-col justify-center  mx-auto'>
        <div >
            <p className='font-bold text-4xl border-b-4 border-gray-500 inline'>Experience</p>
            <p className='py-6'>These are the technlogies I've Worked with</p>
        </div>
        <div className='grid w-full  grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:p-0'>
          {links.map(({id,src,title,style})=>(
                <div key={id} className={` shadow-md hover:scale-105 duration-200 rounded-lg  text-center ${style}`}>
                <img src={src} alt="No show" className='w-20  mx-auto' />

                  <p className='p-4 mt-4'>{title}</p>
            </div>
          ))}
            
        </div>
    </div> 
    </div>
  )
}

export default Experience
