import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Sidebar from './shared/components/sidebar/sidebar';
import Home from './pages/Home/Home';
import Clientes from './pages/Clientes/Clientes';
import Produtos from './pages/Produtos/Produtos';
import Pedidos from './pages/Pedidos/Pedidos';


const App = () => {
  return (
    <Router>
      <Sidebar/>
      <div className="main-content">
        <div>
          <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<Clientes/>} path="/clientes"/>
            <Route element={<Produtos/>} path="/produtos"/>
            <Route element={<Pedidos/>} path="/pedidos"/>
          </Routes>
        </div>
      </div>
    </Router>
      
  );
};

export default App;
