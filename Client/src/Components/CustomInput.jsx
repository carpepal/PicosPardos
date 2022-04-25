import React from 'react'
import {SearchCircleIcon} from '@heroicons/react/solid'

const CustomInput = (props) => {

    let style = {
        divStyle: {
            width: props.width || '200px',
            height: props.height || '30px',
            backgroundColor: props.backgroundColor || 'transparent',
            border: props.border || 'none',
            borderBottom: props.borderBottom || '1px solid #000',
            color: props.color || 'black',
            fontSize: props.fontSize || '14px',
            display: props.display || 'flex',
            justifyContent: props.justifyContent || 'space-between',
        },
        inputStyle: {
            width: props.width || '150px',
            height: props.height || '30px',
            backgroundColor: props.backgroundColor || 'transparent',
        }

    }

    return (
        <div className='custom-input' style={style.divStyle}>
            <input style={style.inputStyle} type={props.type} name={props.name} id={props.name} placeholder={props.placeholder} />
            <SearchCircleIcon size={props.size || '20px'} color={props.color || 'black'} />
        </div>
    )
}

export default CustomInput