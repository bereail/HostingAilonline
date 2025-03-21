import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contacto from './Screens/Contacto/Contacto';
import Inicio from './Screens/Inicio/Inicio';
import Productos from './Screens/Productos/Productos';
import Nosotros from './Screens/Nosotros/Nosotros';
import NuestrosClientes from './Screens/NuestrosClientes/NuestrosClientes';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Footer from './components/Footer/Footer';
import MisionVision from './Screens/MisionVision/MisionVision';

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", alignContent: "center" }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            {/* Home and other sections */}
            <Route path="/" element={
              <div>
                <section id="Inicio">
                  <Inicio />
                </section>
                <MisionVision />
                <section id="Productos">
                  <Productos />
                </section>
                <section id="NuestrosClientes">
                  <NuestrosClientes />
                </section>
                <section id="Contacto">
                  <Contacto />
                </section>
              </div>
            } />
            
             {/* Product detail route */}
             <Route path="/product/:id" element={<ProductDetail />} />
            
            {/* About us page */}
            <Route path="/Nosotros" element={<Nosotros />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
