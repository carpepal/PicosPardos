import React from 'react'
import {SearchCircleIcon} from '@heroicons/react/solid'

const CustomInput = ({label ,handleInputChange , error, ...props}) => {
    return (
        <div className='custom-input'>
            <div>
                <label htmlFor={label}>{label}</label>
            </div>
            <input {...props} onChange={handleInputChange} className = {error && "error"}/>
            {error && <span className='error-message'>{error}</span>}
        </div>
    )
}

export default CustomInput

