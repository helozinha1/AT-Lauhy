import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Footer  from './components/Footer/Footer';

import Home from './pages/Home/Home'
import Contato from './pages/Contato/Contato'
import Sobre from './pages/Sobre/Sobre'
import Extra from './pages/Extra/Extra'
import NotFound from './pages/NotFound/NotFound'
import Produtos from './pages/Produtos/Produtos'

import './App.css'


function App() {
 

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main style={{ minHeight: '80vh', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/extra" element={<Extra />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
