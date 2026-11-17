const mongoose = require("mongoose")


mongoose.connect("mongodb://godwillegbuta_db_user:xfkniHlhKJ3S0s61@ac-fex5znm-shard-00-00.mpvtkhk.mongodb.net:27017,ac-fex5znm-shard-00-01.mpvtkhk.mongodb.net:27017,ac-fex5znm-shard-00-02.mpvtkhk.mongodb.net:27017/?ssl=true&replicaSet=atlas-cp2ch0-shard-0&authSource=admin").then(()=>console.log("database connection established")).catch((err)=>console.log("Unable to connect to database due to "+ err))


