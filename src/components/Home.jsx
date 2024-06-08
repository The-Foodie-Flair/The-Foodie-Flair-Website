import React from 'react'
import Button from '../layouts/Button'
import image from "../assets/hero.jpeg";

const Home = () => {
  return (
    <div className='min-h-screen flex felx-col justify-center lg:flex-row lg-justify-center items-center lg:px-32 px-5 gap-10 '>
        {/* bg-gradient-to-r from-brightColor to-backgroundColor bg-[#bc8877]*/}
      <div className='w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0'>
        <h1 className='font-semibold text-5xl text-center lg:text-start leading-tight'>Welcome to The Foodie Flair</h1>
        <div className='flex flex-row gap-6'>
            <a href="#menu">
            <Button title="View Menu"/>
            </a>
            <a href="https://thefoodieflair.blogspot.com/">
            <Button title="Blogs"/> 
            </a>
        </div>
      </div>
      <div className='pt-20 relative '>
        <img className='rounded-lg' src={image} alt="image" />
      </div>
    </div>
  )
}

export default Home