import React from "react";
import { Route, Routes } from "react-router-dom";
import { Convert, CurrencyList } from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Convert />} />
        <Route path="/list" element={<CurrencyList />} />
      </Routes>
    </Layout>
  );
}

export default App;
