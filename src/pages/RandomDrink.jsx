import React, { useState, useEffect } from 'react'

export const RandomDrink = () => {
  const [product, setProduct] = useState([]);

  let apiCall = () => {
    fetch(`https://thecocktaildb.com/api/json/v1/1/random.php`)
      .then(res => res.json())
      .then(data => {
        setProduct(data.drinks[0]);
      })
  }

  useEffect(() => {
    apiCall();
  }, [])

  let ingredients = (Object.keys(product)).filter(x => x.includes('strIngredient')).filter(x => product[x] != null);

  return (
    <section className='px-20 max-w-[1500px] mx-auto px-10 pb-20'>
      <div className='mb-10'>
        <button onClick={() => apiCall()} className='border-none border-2 border-black rounded px-7 py-4 font-semibold bg-blue-700 text-white hover:bg-blue-900'>GET RANDOM DRINK</button>
      </div>
      <div className='flex gap-10 justify-center'>
        <section className='flex-1'>
          <img className='rounded-lg' src={product.strDrinkThumb} alt="" />
        </section>
        <section className='flex-1'>
          <div>
            <h3>Name</h3>
            <span>{product.strDrink}</span>
          </div>
          <div>
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((x,i) => (
                <li className='list-disc ml-5' key={i}>{product[x]}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Instructions</h3>
            <span>{product.strInstructions}</span>
          </div>
          <div>
            <h3>Info</h3>
            <span>{product.strAlcoholic}</span>
          </div>
          <div>
            <h3>Glass</h3>
            <span>{product.strGlass}</span>
          </div>
         
        </section>
      </div>
    </section>
  )
}
