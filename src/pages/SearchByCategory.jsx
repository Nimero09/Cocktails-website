import { useState, useEffect, React } from 'react';

export const SearchByCategory = () => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
  const [categories, setCategories] = useState([]);
  
  function fetchCategories() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        setCategories(data.drinks);
    })
    .catch(err => console.log(`error fetchin: ${err}`));
  }

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line
  }, [])

  return (
    <section className='px-10 w-[90%] mx-auto flex gap-5 flex-wrap'>
        {categories.map(x => (
            <button className='bg-blue-700 text-white px-8 py-4 hover:bg-blue-900 rounded-md' key={x.strCategory}>
                {x.strCategory}
            </button>
        ))}
    </section>
  )
}
