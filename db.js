const mongoose = require("mongoose")

const dataBaseUri = process.env.dataBaseUri
mongoose.connect(dataBaseUri).then(()=>console.log("database connection established")).catch((err)=>console.log("Unable to connect to database due to "+ err))


