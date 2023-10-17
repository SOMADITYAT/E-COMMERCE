import React from 'react'
import {BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Dashboard from './pages/admin/dashboard/Dashboard'
import Nopages from './pages/nopage/Nopages'
import MyState from './context/data/myState'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import ProductInfo from './pages/productInfo/ProductInfo'
import AddProduct from './pages/admin/pages/AddProduct'
import UpdateProduct from './pages/admin/pages/UpdateProduct'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <MyState>
        <Router>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/order' element={
            <ProtectedRoute>
              <Order/>
            </ProtectedRoute>
          }/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/dashboard' element={
             <ProtectedRouteAdmin>
               <Dashboard/>
             </ProtectedRouteAdmin>
             }/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/addproduct" element={
             <ProtectedRouteAdmin>
               <AddProduct/>
             </ProtectedRouteAdmin>
          } />
          <Route path="/updateProduct" element={
            <ProtectedRouteAdmin>
              <UpdateProduct />
            </ProtectedRouteAdmin>
          } />

          <Route path='/*' element={<Nopages/>}/>
       </Routes>
    </Router>
    <ToastContainer />
    </MyState>
    
  )
}

export default App

// user
export const ProtectedRoute = ({children}) =>{
  const user = localStorage.getItem('user')
  if(user){
    return children
  }
  else{
    return <Navigate to={'/login'} />
  }
}
// admin

export const ProtectedRouteAdmin = ({children})=>{
    const admin = JSON.parse(localStorage.getItem('user'))
    if(admin.user.email === 'tsomaditya9424@gmail.com'){
      return children
    }
    else{
      return <Navigate to={'/login'} />
    }
}
