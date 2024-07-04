import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Modal from './Modal'

import axios from "axios"

const UserList = () => {
  const [users,setUsers] = useState([])
  const [selectedUser,setSelectedUser] = useState()

  const navigate = useNavigate()

  useEffect(()=>{
    getUser()
  },[])

  const getUser = async ()=>{
    const response = await axios.get("http://localhost:3000/users")
    setUsers(response.data)
    
  }

  const deleteUser =async()=>{
    try {
      await axios.delete(`http://localhost:3000/users/${selectedUser?.id}`)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  const findUserById = (e,id)=>{
    e.preventDefault()
    setSelectedUser(users.find(user=>user.id==id))
  }

  return (
    <div className='bg-dark min-vh-100'>
		  <div className='container pt-5'>
        <Link to={"add"} className='btn btn-success' >Add User</Link>
		    <table className='table table-dark align-middle mt-2'>
		      <thead>
		        <tr>
		          <th scope='col'>No.</th>
		          <th scope='col'>Name</th>
		          <th scope='col'>Email</th>
		          <th scope='col'>Gender</th>
		          <th scope='col'>Action</th>
		        </tr>
		      </thead>
		      <tbody>
		        {users.map((user,i)=>(
		          <tr key={user.id} >
		            <td>{i+1}</td>
		            <td>{user.name}</td>
		            <td>{user.email}</td>
		            <td>{user.gender}</td>
		            <td>
                  <Link to={`edit/${user.id}`} className='btn btn-primary me-2'>Edit</Link>
                  <button 
                    type='button' 
                    className='btn btn-danger myInput'
                    data-bs-toggle='modal'
                    data-bs-target='#staticBackdrop'
                    onClick={e=>findUserById(e,user.id)}
                  >Delete</button>
                </td>
		          </tr>
		        ))}
		      </tbody>
		    </table>
        <Modal 
          name={selectedUser?.name} 
          email={selectedUser?.email} 
          gender={selectedUser?.gender} 
          type={"deleteUser"} 
          submitHandler={deleteUser}
        />
		  </div>
    </div>
  )
}

export default UserList
