import React from 'react'

const Modal = ({name,email,gender,submitHandler,type}) => {
  return (
  <div 
    class="modal fade" 
    id="staticBackdrop" 
    data-bs-backdrop="static"
    data-bs-keyboard="false" 
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered ">
      <div class="modal-content bg-dark text-light ">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            {type==='editUser'?'Do you want save the changes?':'Do you want delete this user?'}
          </h1>
        </div>
        <div class="modal-body ">
          <table className='table text-light'>
            <thead>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Gender</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{gender}</td>               
              </tr>
            </tbody>
          </table> 
        </div>
        <div class="modal-footer">
          <button 
            type="button" 
            className={`btn ${type==='editUser'?'btn-danger':'btn-primary'}`} 
            data-bs-dismiss="modal">No</button>
          <button 
            type="button"
            className={`btn ${type==='editUser'?'btn-success':'btn-danger'}`}
            data-bs-dismiss="modal"
            onClick={submitHandler}
          >
            {type==='editUser'?'Save':'Delete'}
          </button>
        </div>
      </div>
      </div>
  </div>
  )
}

export default Modal
