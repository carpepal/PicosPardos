import React from 'react'
import {SearchCircleIcon} from '@heroicons/react/solid'

const CustomInput = ({label ,handleInputChange , ...props}) => {
    return (
        <div>
            <div>
                <label htmlFor={label}>{label}</label>
            </div>
            <input {...props} onChange={handleInputChange}/>
        </div>
    )
}

export default CustomInput