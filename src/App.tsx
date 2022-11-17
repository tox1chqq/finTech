import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Convert} from "./pages/Convert";
import {CurrencyList} from "./pages/CurrencyList";
import {Layout} from "./components/Layout";
import CurrencyAPI from './services/index'

function App() {
    CurrencyAPI.registerUser()

  return <Layout>
      <Routes>
          <Route path='/'  element={<Convert/>}/>
          <Route path='/list' element={<CurrencyList/>}/>
      </Routes>
  </Layout>
}

export default App;
