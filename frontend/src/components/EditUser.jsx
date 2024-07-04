import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import Modal from './Modal'

const EditUser = () => {


  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [gender,setGender] = useState(1)
  const {id} = useParams() 

  const navigate = useNavigate()

  useEffect(()=>{
    getUserById()
  },[])

  const getUserById =async()=>{
      const response = await axios.get(`http://localhost:3000/users/${id}`)
    	setName(response.data.name)
    	setEmail(response.data.email)
   	  setGender(response.data.gender)
      console.log(response.data)
  }

  const submitHandler=async()=>{
    try {
      await axios.patch(`http://localhost:3000/users/${parseInt(id)}`,{
        name,
        email,
        gender
      })
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
     <div className='bg-dark min-vh-100 pt-5'>                                                           
      <Modal 
        name={name}
        email={email}
        gender={gender}
        type={'editUser'}
        submitHandler={submitHandler}
      />
 			<form 
         className='container'
         style={{"maxWidth":"800px"}}
       >
 				<div className="mb-3">
 				  <label for="nameInput" className="form-label text-warning">Name</label>
 				  <input 
             type="text" 
             className="form-control bg-dark border-warning text-warning focus-ring focus-ring-warning"
             id='nameInput'
             value={name}
             onChange={(e)=>setName(e.target.value)}
           />
 				</div>
 				<div class="mb-3">
 				  <label for="emailInput" className="form-label text-warning">Email address</label>
 				  <input
             type="email" 
             className="form-control bg-dark border-warning text-warning focus-ring focus-ring-warning"
             id='emailInput'
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
           />
 				</div>
         <div className='mb-3'>
           <label for="genderInput" className='form-label text-light'>Gender</label>
 					 <select 
             class="form-select bg-dark text-light border-primary"
             value={gender}
             onChange={(e)=>setGender(e.target.value)}
           >
 					  <option value={"male"} className='p-2'>male</option>
 					  <option value={"female"} className='p-2'>female</option>
 					 </select>
         </div>
 				<button 
          type='button'
          className="btn btn-warning mt-3 myInput"
          data-bs-toggle="modal" 
          data-bs-target="#staticBackdrop"
         >Submit</button>
 			</form>
     </div>
  )
}

export default EditUser
