import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar/NavBar';
import { NoMatch } from './components/NoMatch/NoMatch';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>
      </Routes>
    </>
  );
}

export default App;
