import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* Add other routes for your app's components */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
