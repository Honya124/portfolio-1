import React from 'react'
import HeroImg from "../assets/b-g2.jpg"
import {MdOutlineArrowRightAlt} from 'react-icons/md'
import {Link} from 'react-scroll'

function Home() {
  return (
    <div name="home" className='w-full h-screen bg-gradient-to-b from-black via-black 
    to-gray-800 text-white  '>
       <div className='w-max-screen-lg sm:flex px-4 lg:mx-[4rem] h-full justify-center items-center'>
        <div  className='flex flex-col  justify-center '>
            <h1 className='font-bold sm:text-7xl  text-4xl  '>I'm a Full Stack Developer</h1>
           <p className='text-gray-400 py-4 max-x-md'>
            Lorem ipsum, dolor sit amet consectetur
             adipisicing elit. Provident cupiditate eius
              possimus ipsam quisquam consectetur autem nobis 
              nisi aliquam suscipit incidunt facere, commodi similique
             pariatur tenetur maxime odit eaque alias!</p> 
            
            <div >
                <Link to='portfolio' smooth duration={500}
                 className='w-fit cursor-pointer group flex  items-center px-6 py-3 mb-6 rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500'>
                    Portfolio
           <MdOutlineArrowRightAlt size={30} className="ml-1 group-hover:rotate-90 duration-300" />
                </Link>
           </div>
        </div>

        <div >
        <img className='rounded-lg mx-auto w-2/3 ' src={HeroImg} alt="heroimage"  />
        </div>
       </div>
    </div>
  )
}

export default Home
