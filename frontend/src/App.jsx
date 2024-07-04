import { useState } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"

import UserList from './components/UserList'
import EditUser from './components/EditUser'
import AddUser from './components/AddUser'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='add' element={<AddUser/>}/>
        <Route path='edit/:id' element={<EditUser/>}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
