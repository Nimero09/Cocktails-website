import React from 'react'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/img/cocktail-logo.png'

export const NavBar = () => {
  return (
    <header className='mb-10'>
        <nav className='w-[90%] m-auto flex items-center justify-between px-10'>
            <section>
                <Link to={'/'}>
                    <img className='cursor-pointer w-40' src={logo} alt="" />   
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
