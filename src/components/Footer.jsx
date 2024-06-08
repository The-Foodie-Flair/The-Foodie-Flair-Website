import React from 'react'
import instagram from '../assets/instagram.svg'
import wa from '../assets/whatsappbusiness.svg'
const Footer = () => {
  return (
    <div className='bg-brightColor text-white rounded-t-3xl mt-8 md:mt-0 '>
        <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
            <div className='w-full md:w-1/4'>
                <h1 className='font-semibold text-xl pb-4'>The Foodie Flair</h1>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-backgroundColor transition-all cursor-pointer'href="home">Home</a>
                    <a className='hover:text-backgroundColor transition-all cursor-pointer'href="#menu">Menu</a>
                    <a className='hover:text-backgroundColor transition-all cursor-pointer'href="#about">About Us</a>
                    <a className='hover:text-backgroundColor transition-all cursor-pointer'href="https://thefoodieflair.blogspot.com/">Blogs</a>
                </nav>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contact Us</h1>
                <nav className='flex flex-col gap-2'>
                    <div className='flex flex-row items-center pb-2'>
                        <img className='max-h-12 px-4' src={wa} alt="whatsapp" />
                        <a className='hover:text-backgroundColor transition-all cursor-pointer 'href="/">+919969760934</a>
                    </div>
                    <div className='flex flex-row items-center'>
                        <img className='max-h-12 px-4' src={instagram} alt="instagram" />
                        <a className='hover:text-backgroundColor transition-all cursor-pointer'href="https://www.instagram.com/the.foodieflair/">the.foodieflair</a>
                    </div>
                    
                    
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Footer
