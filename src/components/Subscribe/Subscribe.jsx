import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-slate-200 dark:bg-slate-800 dark:text-white mt-10'>
        <div data-aos="zoom-in" className="container max-w-[680px]  ">
            <div className='flex flex-col justify-center items-center gap-5 py-8'>
            <h1 className='font-bold text-3xl md:text-4xl'>Get Notified About New Products</h1>
            <input type="email" placeholder='Enter your email' className='w-full px-4 py-3 rounded-sm bg-slate-50 
            dark:bg-slate-600 text-lg border border-gray-400 focus:outline-primary focus:outline
            ' />
            </div>
        </div>
        </div>
  )
}

export default Subscribe