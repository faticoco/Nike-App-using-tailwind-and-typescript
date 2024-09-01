import React from 'react'

interface ButtonProps{
    label:string,
    iconUrl:string
  
  };
const Button : React.FC<ButtonProps>= ({label , iconUrl}) => {
  return (
    <button className='flex justify-center items-center border font-montserrat gap-2 px-5 py-4  rounded-full bg-coral-red leading-none text-white  border-coral-red text-lg'>{label}
    <img src={iconUrl} className='ml-2 rounded-full h-5 w-5'/></button>
  )
}

export default Button
