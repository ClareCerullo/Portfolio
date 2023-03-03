import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Hero />} />
      </Route>
    </Routes>
  );
}

export default App;
