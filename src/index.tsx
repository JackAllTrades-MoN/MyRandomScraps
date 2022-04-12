import React from 'react';
import{ createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Detail } from './detail/Detail';

const container = document.getElementById('root');
if(!container) throw new Error("Root element not found");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App/ >}>
          <Route index element={<Home />} />
          <Route path=":detail_id/detail" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
