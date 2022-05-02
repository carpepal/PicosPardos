import React from 'react'
import classNames from '../Services/helpers/classes.js' 

const CustomInput = ({label ,showLabel,handleInputChange , error, ...props}) => {
    return (
        <div className='w-full flex flex-col justify-center items-center w-2/4'>
            <div className='text-left w-full '>
                <label
                htmlFor={label} 
                className={showLabel ? 'block text-gray-700 text-xl font-bold mb-2' : 'sr-only'}>
                {label}
                </label>
            </div>
            <input {...props} onChange={handleInputChange} className = {classNames(error?'border-b-red-500'
                :'border-b-slate-400' , "w-full mb-5 mt-2 border-b-2   hover:outline-none hover:border-b-black focus:border-b-black  focus:outline-none mb-1 pt-2 outline-transparent bg-transparent")}/>
            {error && <span className='error-message text-red-600'>{error}</span>}
        </div>
    )
}

export default CustomInput

