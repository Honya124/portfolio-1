import React,{useState} from 'react'
import {FaTimes,FaBars} from 'react-icons/fa'

function Navbar() {
  const [navState,setNavState]=useState(false)
    const links=[
        {
            id:1,
            link:"home" },
        {
          id:2,
          link:"about" },
      {
        id:3,
        link:"portfolio"},
    {
      id:4,
      link:"experience"},
  {
    id:5,
    link:"contact"},
    ];

  return (
    <div className='flex justify-between px-4 bg-black text-white w-full h-20 items-center'>
      <div className='font-signature  font-bold '>
        <h1 className='px-4  text-4xl'>Honya</h1>
      </div>
      <ul className='hidden md:flex'>
       {links.map(({id,link})=>(
        <li className='text-gray-400 mx-4 capitalize 
        hover:scale-105 duration-100 cursor-pointer'>
         {link}
        </li>
       ))}
      </ul>
      <div onClick={()=>{

      }} className='text-white' size={20}>
        <FaBars />
      </div>
      
    </div>
  )
}

export default Navbar
