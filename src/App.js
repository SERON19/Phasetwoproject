import { Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Computing from './components/Computing';
import Phones from './components/Phones';
import GeneralSales from './components/GeneralSales';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import SearchProduct from './components/SearchProduct';
function App() {
  return (  
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/productdetails/:name" element={<ProductDetails/>} />
      <Route path="/computing" element={<Computing />} />
      <Route path="/phones" element={<Phones/>} />
      <Route path="/sales" element={<GeneralSales/>} />
      <Route path="/searchproducts/:search_term" element={< SearchProduct/>} />
    </Routes>
    </>
  );
}

export default App;
