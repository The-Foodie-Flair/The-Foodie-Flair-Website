import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='px-6 py-1 border-white bg-backgroundColor hover:text-brightColor transition-all rounded-full'>
            {props.title}
      </button>
    </div>
  )
}

export default Button
