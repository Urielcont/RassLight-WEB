// import React from 'react'
import { useState } from 'react'

export default function modal() {

// eslint-disable-next-line react-hooks/rules-of-hooks
const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <button className='bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold mt-5' onClick={()=>setIsOpen(true)}>Open</button>

    {
        isOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-white p-5 rounded flex flex-col justify-center items-center gap-5'>
            <div>
                <label htmlFor="" className='mr-3 font-semibold'>Nombre</label>
                <input type="text" className='w-64 px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 duration-200'/>
            </div>
            <div>
                <label htmlFor="" className='mr-3 font-semibold'>Apellido</label>
                <input type="text" className='w-64 px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 duration-200'/>
            </div>
            <div>
                <button className='bg-red-500 py-2 px-6 rounded-lg text-white font-bold mt-5' onClick={()=>setIsOpen(false)}>Close modal</button>
            </div>
        </div>
    </div>
        )
    }

    
    </>
  )
}
