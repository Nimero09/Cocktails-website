import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header>
        <nav className='w-[90%] m-auto flex items-center justify-between px-10'>
            <section>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/010/626/347/small/cocktail-club-night-logo-creative-cocktail-bar-logo-design-template-vector.jpg" alt="" />
            </section>
            <section>
                <ul className='flex'>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </section>
        </nav>
    </header>
  )
}
