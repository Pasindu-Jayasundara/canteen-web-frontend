import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from './pages/Login.page.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route index element={<LoginPage />} />
      </Routes>

    </BrowserRouter>
  </StrictMode>
)
