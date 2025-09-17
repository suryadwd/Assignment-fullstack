import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import ContractsDashboard from "./pages/ContractsDashboard";
import Profile from './pages/Profile'
import ContractDetail from './pages/ContractDetail'
import  UploadPage  from './pages/UploadPage'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contractsDashboard" element={<ContractsDashboard />} />
        <Route path="/profile" element={<Profile />} />
         <Route path="/contracts/:id" element={<ContractDetail />} />
         <Route path="/UploadPage" element={<UploadPage />} />
      </Routes>
     <ToastContainer /> 
     </>
  )
}

export default App

