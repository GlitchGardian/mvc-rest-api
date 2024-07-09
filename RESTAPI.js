const express = require('express')
const app = express()
const port = 3000
const { ConnectDb } = require("./Connection/connect")
const { logOfReqRes } = require("./Middelware/allMiddle")
const UserRouter = require("./Routes/user")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use((req, res, next) => {
    logOfReqRes("log.txt", req)
    next()
})

// Connecting

ConnectDb("mongodb://localhost:27017/RestApi").then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log(err);
})

// Routes

app.use("/api/user", UserRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))