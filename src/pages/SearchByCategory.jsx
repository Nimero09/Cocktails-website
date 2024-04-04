import { useState, useEffect, React } from 'react';
import { Link } from 'react-router-dom';

export const SearchByCategory = () => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        setCategories(data.drinks);
    })
    .catch(err => console.log(`error fetchin: ${err}`));
    // eslint-disable-next-line
  }, [])

  const getCategory = (categorySelected) => {
    fetch(`https://thecocktaildb.com/api/json/v1/1/filter.php?c=${categorySelected}`)
        .then(res => res.json())
        .then(data => {
            setProducts(data.drinks);
        })
        .catch(err => console.log(`error fetching: ${err}`));
  }

  return (
    <>
    <section className='px-10 max-w-[90%] mx-auto'>
        <section className='justify-center mb-10 flex gap-5 flex-wrap'>
            {categories.map(x => (
                <button onClick={() => getCategory(x.strCategory)} className='bg-blue-700 text-white px-6 py-4 hover:bg-blue-900 rounded-md' key={x.strCategory}>
                    {x.strCategory}
                </button>
            ))}
        </section>
        {products.length !== 0 ? 
        <div className='max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {products.map(product => (
                <section className='card' key={product.idDrink}>
                    <img src={product.strDrinkThumb} alt="" />
                    <div className='mb-0 p-5 gap-5 flex justify-between items-center'>
                        <section className='flex-1'>
                            <h2 className='font-bold text-xl'>{product.strDrink}</h2>
                        </section>
                        <section className='flex-2'>
                            <Link to={`/drinks/${product.idDrink}`}>
                                <button className='px-4 py-4 rounded-md text-white bg-blue-700 border-blue-700 hover:bg-blue-900'>VIEW DETAILS</button>
                            </Link>
                        </section>
                    </div>
                </section>
            ))}
        </div>
        : null}       
    </section>
    </>
  )
}
