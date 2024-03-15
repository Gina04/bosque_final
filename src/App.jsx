import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './componentes/Footer/Footer';
import HeaderMain from './componentes/HeaderMain/HeaderMain';
import InicioSesion from './componentes/InicioSesion/InicioSesion';
import Main from './componentes/Main/Main';
import TopBar from './componentes/TopBar/TopBar';
import RegistroUsuario from './componentes/InicioSesion/RegistroUsuario';
import ListaMuebles from './componentes/Muebles/ListaMuebles';
import Banner from './componentes/Banner/Banner';
import DetalleMueble from './componentes/Muebles/DetalleMueble';


function App() {
  return (
    <>
     <Router>
        <TopBar />
        <HeaderMain />
        <Routes>
          <Route path="/IniciarSesion" element={<InicioSesion />} />
          <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
          <Route path="/furniture/living-room/sofa-and-sectional-collections" element={<ListaMuebles/>} />
          <Route path="/FurnitureDetail/:id" element={<DetalleMueble/>} />
          <Route path="/" element={<Main />} />
          
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
