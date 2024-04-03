import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar/NavBar';
import { NoMatch } from './components/NoMatch/NoMatch';
import { Drinks } from './pages/Drinks';
import { ProducDetail } from './pages/ProducDetail';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/drinks' element={<Drinks/>}></Route>
        <Route path='/drinks/:id' element={<ProducDetail/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>
      </Routes>
    </>
  );
}

export default App;
