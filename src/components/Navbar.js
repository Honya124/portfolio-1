import React,{useState} from 'react'
import {FaTimes,FaBars} from 'react-icons/fa'
import {Link} from 'react-scroll'

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
    <div className='sticky top-0 flex justify-between px-4 bg-black text-white w-full h-20 items-center'>
      <div className='font-signature  font-bold '>
        <h1 className='px-4  text-4xl'>Honya</h1>
      </div>
      <ul className='hidden md:flex'>
       {links.map(({id,link})=>(
        <li className='text-gray-400 mx-4 capitalize 
        hover:scale-105 duration-100 cursor-pointer'>
        <Link to={link} smooth duration={500}
        >{link}</Link>
         
        </li>
       ))}
      </ul>
      <div onClick={()=>{ setNavState(!navState)}} 
      className='text-white md:hidden cursor-pointer z-10 ' >
       {navState ?<FaTimes size={30} />: <FaBars size={30} /> }
        </div>
        {navState &&
         <ul className=' w-full h-screen bg-gradient-to-b from-black
         absolute top-0 left-0 to-gray-800 text-gray-400
          flex flex-col items-center justify-center '>
         {links.map(({id,link})=>(
         <li className='text-gray-400 mx-4 capitalize my-4 text-4xl cursor-pointer
         '>
          <Link onClick={()=>{setNavState(!navState)}} to={link} smooth duration={500}>
          {link}
          </Link>
          
         </li>
        ))}
         </ul>
       }
      
      
      
    </div>
  )
}

export default Navbar
