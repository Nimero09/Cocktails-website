import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
const url = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=`

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`${url}${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data.drinks[0]);
        console.log(product)
      })
      .catch(err => console.log(err));
      // eslint-disable-next-line
  }, [id])

  let ingredients = (Object.keys(product)).filter(x => x.includes('strIngredient')).filter(x => product[x] != null);

  return (
    <section className='px-10 w-[90%] mx-auto px-10pb-20'>
      <div className='flex gap-10 items-center'>
        <section>
          <img className='rounded-lg' src={product.strDrinkThumb} alt="" />
        </section>
        <section>
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
