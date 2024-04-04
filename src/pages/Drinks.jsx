import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=`

export const Drinks = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data.drinks);
                console.log(products);
            })
            .catch(err => console.log(err));
            // eslint-disable-next-line
    }, [])
    

  return (
    <section className='px-10 mx-auto max-w-[1200px] w-100 pb-20'>
        <h1 className='text-center mb-10 font-bold text-3xl'>DRINKS</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {products.map(product => (
                <section className='card' key={product.idDrink}>
                    <img src={product.strDrinkThumb} alt="" />
                    <div className='p-5 flex justify-between items-center'>
                        <section>
                            <h2 className='font-bold text-xl'>{product.strDrink}</h2>
                            <span className='font-semibold text-lg'>{product.strCategory}</span>
                        </section>
                        <section>
                            <Link to={`/drinks/${product.idDrink}`}>
                                <button className='px-4 py-4 rounded-md text-white bg-blue-700 border-blue-700 hover:bg-blue-900'>VIEW DETAILS</button>
                            </Link>
                        </section>
                    </div>
                </section>
            ))}
        </div>
    </section>
  )
}
