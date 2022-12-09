import About from 'pages/About';
import { Route, Routes } from 'react-router-dom';
import './main.css';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
    </Routes>
  );
}

export default App;
