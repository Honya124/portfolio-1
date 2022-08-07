import React from 'react'

function Contact() {
  return (
    <div name='contact' className='p-4 w-full h-screen text-white bg-gradient-to-b from-black via-black
    to-gray-800'>
      <div className='w-full max-w-screen-lg flex flex-col justify-center  mx-auto '>
        <div className='pb-8'>
          <p className='font-bold text-4xl border-b-4 border-gray-500 inline '>Contact</p>   
          <p className='py-8'>Submit the form below to get in touch with me</p> 
        </div>

        <div className='flex justify-center  '>
            <form action="" method='POST' className='flex flex-col justify-center  md:w-1/2 w-full '>

                <input type="text" name='name'
                className='text-xl px-6 py-4 border-2 bg-transparent focus:outline-none rounded-lg ' placeholder='Enter your name' />
                <input type="text" name='email'
                 className='my-4 text-xl px-6 py-4 border-2 bg-transparent focus:outline-none rounded-lg' placeholder='Enter your email' />
                  
                  <textarea name='message'
                   className='p-2 text-xl border-2 bg-transparent focus:outline-none rounded-lg' placeholder='Enter your message' 
                   rows="10"></textarea>
           <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 rounded-lg
           hover:scale-110 duration-500 flex flex-col items-center mx-auto my-8 '>Let's Work</button>
           
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
