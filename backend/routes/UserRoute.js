import express from "express"

//import user controller
import { 
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
  } from "../controllers/UserController.js"

const router = express.Router()

//get user's data
router.get('/users', getUsers)
router.get('/users/:id', getUserById)

//post user's data
router.post('/users', createUser)

//update user's data
router.patch('/users/:id', updateUser)

//delete user,s data
router.delete('/users/:id', deleteUser)

export default router;
