import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const AddUser = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [gender,setGender] = useState(1)
  const navigate = useNavigate()

  const submitHandler = async(e)=>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:3000/users",{
        name,
        email,
        gender: gender==1? "male":"female"
      })
      navigate("/") 
      
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='bg-dark min-vh-100 pt-5'>
			<form 
        className='container'
        style={{"maxWidth":"800px"}}
        onSubmit={submitHandler}
      >
				<div className="mb-3">
				  <label for="nameInput" className="form-label text-warning">Name</label>
				  <input 
            type="text" 
            className="form-control bg-dark border-warning text-warning focus-ring focus-ring-warning"
            id='nameInput'
            onChange={(e)=>setName(e.target.value)}
          />
				</div>
				<div class="mb-3">
				  <label for="emailInput" className="form-label text-warning">Email address</label>
				  <input
            type="email" 
            className="form-control bg-dark border-warning text-warning focus-ring focus-ring-warning"
            id='emailInput'
            onChange={(e)=>setEmail(e.target.value)}
          />
				</div>
        <div className='mb-3'>
          <label for="genderInput" className='form-label text-light'>Gender</label>
					<select 
            class="form-select bg-dark text-light border-primary"
            onChange={(e)=>setGender(e.target.value)}
          >
					  <option selected value={1} className='p-2'>male</option>
					  <option value={2} className='p-2'>female</option>
					</select>
        </div>
				<button 
          type='submit'
          class="btn btn-warning mt-3"
        >Submit</button>
			</form>
    </div>
  )
}

export default AddUser
