import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio.jsx';
import Producto from './components/Producto.jsx';

function App() {
  return (
    <div class="h-screen bg-[#595959]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/productos' element={<Producto/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
