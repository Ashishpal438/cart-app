import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Products from './components/Products';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Products/>} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  );
}

export default App;
