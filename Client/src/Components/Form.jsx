import React from 'react'

const Form = ({children , handleSubmit , name}) => {
    
  return (
      <form className="flex flex-col justify-center items-center bg-slate-50 shadow-lg rounded-lg p-5 w-full h-full sm:max-w-3xl " 
            onSubmit={handleSubmit} name={name}>
            {children}
      </form>
  )
}

export default Form