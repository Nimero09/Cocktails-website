import React from 'react'
import { Link } from 'react-router-dom'

export const NoMatch = () => {
  return (
    <section>
        <h1 className='text-center text-9xl font-bold mb-9'>404</h1>
        <p className='text-center text-xl'>Sorry, we couldn't find this page. But don't worry, you can find plenty of other things in our <Link className={'text-blue-700 font-bold'} to={'/'}>Homepage</Link> </p>
    </section>
  )
}
