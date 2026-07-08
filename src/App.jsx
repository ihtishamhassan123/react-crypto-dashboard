import React, { useState } from 'react'
import Dashboard from './Pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import TransactionPage from './pages/TransactionPage'
import Support from './pages/Support'
import Setting from './pages/Setting'


const App = () => {

  return (
  <Routes>
  <Route path='/' element={<Dashboard />}/>
  <Route path='/transaction' element={<TransactionPage />}/>
  <Route path='/support' element={<Support/>} />
   <Route path='/setting' element={<Setting/>}/>
  </Routes>
    
  )
}

export default App
