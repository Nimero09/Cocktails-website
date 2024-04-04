import cocktail from '../assets/img/cocktail.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <section className='w-[90%] mx-auto px-10'>
        <div className='flex items-center justify-center gap-5'>
            <section className='flex-1'>
              <h1 className='text-4xl font-semibold mb-5'>Discover, Create, and Savor with our <span className='text-blue-700	'>Cocktail App</span></h1>
              <p className='text-xl mb-5'>Introducing the ultimate cocktail companion! With our app, you can unlock a world of tantalizing cocktail recipes at your fingertips. Whether you're a seasoned mixologist or a budding enthusiast, our app seamlessly connects you to a vast database of recipes. Search by name or ingredients, explore new flavors, and shake up your cocktail game like never before. Cheers to endless possibilities!</p>
              <Link to={'/drinks'}>
                <button className='border-none border-2 border-black rounded px-7 py-4 font-semibold bg-blue-700 text-white hover:bg-blue-900'>VIEW COCTAILS</button>
              </Link>
            </section>
            <section className='flex-1 flex justify-center'>
              <img className='w-100 rounded-lg' src={cocktail} alt="" />
            </section>
        </div>
    </section>
  )
}
