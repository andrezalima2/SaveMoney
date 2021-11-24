import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Sidebar from './shared/components/sidebar/sidebar';
import Home from './pages/Home/Home';
import Clientes from './pages/Clientes/Clientes';
import CadProd from './pages/Produtos/Cadastro/CadProd';
import Pedidos from './pages/Pedidos/Pedidos';
import Contas from './pages/Contas/Contas';
import VisuProd from './pages/Visualização/VisuProd';


const App = () => {
  return (
    <Router>
      <Sidebar/>
      <div className="main-content">
        <div>
          <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<Clientes/>} path="/clientes"/>
            <Route element={<CadProd/>} path="/cadastro-produtos"/>
            <Route element={<Pedidos/>} path="/pedidos"/>
            <Route element={<Contas/>} path="/contas"/>
            <Route element={<VisuProd/>} path="/visu-produtos"/>
          </Routes>
        </div>
      </div>
    </Router>
      
  );
};

export default App;
