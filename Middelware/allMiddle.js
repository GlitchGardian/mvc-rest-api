const fs = require("fs")
const date = new Date()

async function logOfReqRes(filename, req) {

    const data = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getUTCSeconds()}, ${req.ip} ,${req.method} ${req.path} \n`
    fs.appendFile(filename, data, (err) => { if (err) { console.log(err) } })
}

module.exports = {
    logOfReqRes
}