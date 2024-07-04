import User from "../model/UserModel.js"

//get user data
//get all user data 
export const getUsers = async(req,res)=>{
  try {
    const response = await User.findAll() 
    res.status(200).json(response)
    
  } catch (error) {
    console.log(error.message)
    
  }
}
//get user data by id
export const getUserById = async(req,res)=>{
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id
      }
    }) 
    res.status(200).json(response)
    
  } catch (error) {
    console.log(error.message)
    
  }
}

//create user data
export const createUser = async(req,res)=>{
  try {
    const dataUser = req.body
    const response = await User.create({
      name: dataUser.name,
      email:  dataUser.email,
      gender: dataUser.gender
    }) 
    res.status(201).json(response)
    
  } catch (error) {
    console.log(error.message)
    
  }
}

//update user's data
export const updateUser = async(req,res)=>{
  try {
    const dataUser = req.body
    const idUser   = req.params.id
    const response = await User.update(
      dataUser,
      {where : {id: idUser}}
    ) 
    res.status(200).json(response)
    
  } catch (error) {
    console.log(error.message)
    
  }
}

//delete user's data
export const deleteUser = async(req,res)=>{
  try {
    const idUser   = req.params.id
    const response = await User.destroy(
      {where : {id: idUser}}
    ) 
    res.status(200).json(response)
    
  } catch (error) {
    console.log(error.message)
    
  }
}
