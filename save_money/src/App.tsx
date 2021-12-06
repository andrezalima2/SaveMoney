import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Sidebar from './shared/components/sidebar/sidebar';
import Home from './pages/Home/Home';
import Clientes from './pages/Clientes/Clientes';
import CadProd from './pages/Produtos/Cadastro/CadProd';
import Pedidos from './pages/Pedidos/cadastro/Pedidos';
import Contas from './pages/Contas/cadastro/Contas';
import VisuProd from './pages/Visualização/VisuProd';
import VisuContas from './pages/Contas/visualizacao/VisuContas'
import VisuPedidos from './pages/Pedidos/visualizacao/VisuPedidos';


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
            <Route element={<Contas/>} path="/novas-contas"/>
            <Route element={<VisuContas/>} path="/visualizar-contas"/>
            <Route element={<VisuProd/>} path="/visu-produtos/:id_categoria"/>
            <Route element={<VisuPedidos/>} path="/visualizar-pedidos"/>
          </Routes>
        </div>
      </div>
    </Router>
      
  );
};

export default App;
