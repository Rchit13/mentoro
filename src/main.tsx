import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MentoroApp from './MentoroApp';
import ClassDetailPage from './ClassDetailPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MentoroApp />} />
        <Route path="/class/:id" element={<ClassDetailPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
