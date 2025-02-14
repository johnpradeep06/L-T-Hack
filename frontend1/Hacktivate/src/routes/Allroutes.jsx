import  Sidebar  from '@/components/page/sidebar/SideBar'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginForm } from '@/components/page/login-form/login'

export const AllRoutes = () => {
  
  return (
    <Routes>
        <Route path='/' element={<Sidebar />} />
        <Route path='/login' element={<LoginForm />} />
    </Routes>
  )
}
