import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Login } from '../pages/Login/Login';
import { Home } from '../pages/Home/Home';
import { Stock } from '../pages/Stock/Stock';
import { Report } from '../pages/Report/Report';
import { Setings } from '../pages/Setings/Setings';

const RoutesPages = () => (
  <Router>
    <Routes>
      {/* Login */}
      <Route path='/login' element={<Login />} />

      {/* Home */}
      <Route path='/home' element={<Home />} />

       {/* Estoque */}
       <Route path='/stock' element={<Stock />} />

        {/* Relatório */}
      <Route path='/report' element={<Report />} />

       {/* Configurações */}
       <Route path='/setings' element={<Setings />} />

    </Routes>
  </Router>
);

export default RoutesPages;
