import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from './pages/Login.page.tsx';
import { ToastContainer } from 'react-toastify';
import DashboardPage from './pages/Dashboard.page.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer />
    <BrowserRouter>

      <Routes>
        <Route index element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>

    </BrowserRouter>
  </StrictMode>
)
