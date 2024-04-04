import React from 'react'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header>
        <nav className='w-[90%] m-auto flex items-center justify-between px-10'>
            <section>
                <Link to={'/'}>
                    <img className='cursor-pointer' src="https://static.vecteezy.com/system/resources/thumbnails/010/626/347/small/cocktail-club-night-logo-creative-cocktail-bar-logo-design-template-vector.jpg" alt="" />   
                </Link>
            </section>
            <section>
                <ul className='flex text-lg font-bold'>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/drinks'}>Drinks</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/search'}>Search</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/random'}>Random</NavLink>
                    </li>
                </ul>
            </section>
        </nav>
    </header>
  )
}
