import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import '../src/Style/Css/index.css'
import Navbar from './Layouts/Navbar'
import Loading from './Components/Loading'
import AdminRoute from './Routes/AdminRoute'
import PrivateRoute from './Routes/PrivateRoute'

const HomePage = lazy(() => import('./Pages/public/HomePage'))
const LoginPage = lazy(() => import('./Pages/public/LoginPage'))
const RegisterPage = lazy(() => import('./Pages/public/RegisterPage'))
const AdminPage = lazy(() => import('./Pages/admin/AdminPage'))
const UserPage = lazy(() => import('./Pages/user/UserPage'))
const ErrorPage = lazy(() => import('./Pages/ErrorPage'))

const PicosPardos = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path='/'
          element={
            <HomePage />
          } />
        <Route
          path='/login'
          element={
            <LoginPage />
          } />
        <Route
          path='/register'
          element={
            <RegisterPage />
          } />
        <Route
          path='/admin'
          element={
            <PrivateRoute>
              <AdminRoute>
                  <AdminPage />
              </AdminRoute>
            </PrivateRoute>
          } />
        <Route
          path='/user'
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          } />
        <Route
          path='*'
          element={
            <ErrorPage />
          } />

      </Routes>
      </Suspense>
    </>
  )
}

export default PicosPardos