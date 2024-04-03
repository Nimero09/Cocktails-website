import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App;