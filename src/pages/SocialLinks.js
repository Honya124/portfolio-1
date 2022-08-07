import React from 'react'
import {FaLinkedin,FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

function SocialLinks() {
  const links=[
    {
      id:1,
      child:(
        <>
        Linkedin <FaLinkedin size={30}/>
        </>
      ),
      href:"https://www.linkedin.com/",
      style:"rounded-tr-md"
    },
    {
      id:2,
      child:(
        <>
        GitHub <FaGithub  size={30}/>
        </>
      ),
      href:"https://github.com/",
    },
    {
      id:3,
      child:(
        <>
        Mail <HiOutlineMail size={30} />
        </>
      ),
      href:"https://www.mail.com/",
    },
    {
      id:4,
      child:(
        <>
        Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href:"/resume.pdf",
      style:"rounded-br-md",
      download:true
    },

   
  ]
  return (
    <div className='hidden lg:flex top-[35%] fixed  left-0'>
      <ul className='  flex flex-col
      justify-between'>
        {links.map(({id,child,href,style,download})=>(
          <li key={id} className={"w-40 flex h-14 justify-between items-center bg-gradient-to-l from-blue-400 via-slate-500 to-cyan-700  ml-[-100px] hover:ml-[-10px] duration-300 text-white "
          +" "+style} >
          <a className="mx-4 w-40 flex h-14 justify-between items-center"
           href={href}
           download={download}
           rel="noreferrer"
             >{child}</a>
          </li>
        ))}
     
     
      </ul>
    </div>
  )
}

export default SocialLinks
