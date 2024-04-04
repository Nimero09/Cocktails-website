import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar/NavBar';
import { NoMatch } from './components/NoMatch/NoMatch';
import { Drinks } from './pages/Drinks';
import { ProductDetail } from './pages/ProductDetail/ProductDetail';
import { SearchByCategory } from './pages/SearchByCategory';
import { RandomDrink } from './pages/RandomDrink';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/drinks' element={<Drinks/>}></Route>
        <Route path='/drinks/:id' element={<ProductDetail/>}></Route>
        <Route path='/search' element={<SearchByCategory/>}></Route>
        <Route path='/random' element={<RandomDrink/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>
      </Routes>
    </>
  );
}

export default App;
