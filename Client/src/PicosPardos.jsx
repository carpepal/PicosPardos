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
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback= {<Loading/>}>
            <HomePage />
            </Suspense>
          } />
        <Route
          path='/login'
          element={
            <Suspense fallback= {<Loading/>}>
            <LoginPage />
            </Suspense>
          } />
        <Route
          path='/register'
          element={
            <Suspense fallback= {<Loading/>}>
            <RegisterPage />
            </Suspense>
          } />
        <Route
          path='/admin'
          element={
            <PrivateRoute>
              <AdminRoute>
                <Suspense fallback={<Loading/>}>
                  <AdminPage />
                </Suspense>
              </AdminRoute>
            </PrivateRoute>
          } />
        <Route
          path='/user'
          element={
            <PrivateRoute>
              <Suspense fallback= {<Loading/>}>
              <UserPage />
              </Suspense>
            </PrivateRoute>
          } />
        <Route
          path='*'
          element={
            <Suspense fallback= {<Loading/>}>
            <ErrorPage />
            </Suspense>
          } />

      </Routes>
    </>
  )
}

export default PicosPardos