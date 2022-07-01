import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CapturedPokemon from './Pages/CapturedPokemon';
import App from './App';
import "./index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />}></Route>
      <Route path="capturedpokemon" element={<CapturedPokemon />}></Route>
      <Route path="*"
        element={
          <main className="wrong-page">
            <p>It seems you've taken a wrong turn...</p>
          </main>
        }></Route>
    </Routes>
  </BrowserRouter>
);

