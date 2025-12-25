import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from './pages/Login.page.tsx';
import { ToastContainer } from 'react-toastify';
import DashboardPage from './pages/Dashboard.page.tsx';
import VerifyOtpPage from './pages/VerifyOtp.page.tsx';
import { ProtectedRoutes } from './routes/protected.routes.tsx';
import { AuthProvider } from './context/authContext/Auth.provider.tsx';
import { PublicRoutes } from './routes/public.routes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer />

    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* public routes */}
          <Route element={<PublicRoutes />} >
            <Route index element={<LoginPage />} />
            <Route path='verify-otp' element={<VerifyOtpPage />} />
          </Route>

          {/* secure routes */}
          <Route path="/user" element={<ProtectedRoutes />} >
            <Route index element={<DashboardPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
