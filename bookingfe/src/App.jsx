import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Dashboard from "./pages/Dashboard";

function App() {
  return (

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    
  );
}

export default App;
