import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import LoginPage from './pages/Login.page.tsx';
import { ToastContainer } from 'react-toastify';
import DashboardPage from './pages/Dashboard.page.tsx';
import VerifyOtpPage from './pages/VerifyOtp.page.tsx';
import { ProtectedRoutes } from './routes/protected.routes.tsx';
import { AuthProvider } from './context/authContext/Auth.provider.tsx';
import { PublicRoutes } from './routes/public.routes.tsx';
import { DashboardComponent } from './components/Dashboard.component.tsx';
import { ProfileComponent } from './components/Profile.component.tsx';
import { SettingComponent } from './components/Setting.component.tsx';
import { AnanlyticsProductComponent } from './components/AnalyticsProduct.component.tsx';
import { AnalyticsCustomerComponent } from './components/AnalyticsCustomer.component.tsx';

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

            <Route path='dashboard' element={<DashboardPage />}>

              <Route index element={<DashboardComponent/>} />
              <Route path='profile' element={<ProfileComponent/>} />
              <Route path='settings' element={<SettingComponent/>} />
              <Route path='analytics/product' element={<AnanlyticsProductComponent/>} />
              <Route path='analytics/customer' element={<AnalyticsCustomerComponent/>} />
            </Route>

            <Route path="" element={<Navigate to={"dashboard"} />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
