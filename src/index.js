import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { GamePage } from './components/GamePage';


const Index = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          < Route path="/" element={<App />} />
          < Route path="/:id" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

