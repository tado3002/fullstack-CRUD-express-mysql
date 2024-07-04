import express from "express"
import cors from "cors"

import UserRoute from "./routes/UserRoute.js"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

//routing
app.use(UserRoute)

app.listen(port, ()=>{
  console.log(`Example app listening on port ${port}`)
})

