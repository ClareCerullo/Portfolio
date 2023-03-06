import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Hero />} />
      </Route>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
