// db
// test
// > use mountains
// switched to db mountains
// > db
// mountains
// > show dbs
// admin   0.000GB
// config  0.000GB
// local   0.000GB
// test    0.000GB
// > db.createCollection("himalayas")
// { "ok" : 1 }
// > show collections
// himalayas
// >
// >
// > db.himalayas.insert({name:"Dhauldhar range",height:`4000 mtrs`})
// WriteResult({ "nInserted" : 1 })
// > db.himalayas.find()
// { "_id" : ObjectId("5fbb84e1b6cf3d537978b5b0"), "name" : "Dhauldhar range", "height" : "4000 mtrs" }
// > db.himalayas.find()
// { "_id" : ObjectId("5fbb84e1b6cf3d537978b5b0"), "name" : "Dhauldhar range", "height" : "4000 mtrs" }
// > db.himalayas.find({name:"Dhauldhar range"})
// { "_id" : ObjectId("5fbb84e1b6cf3d537978b5b0"), "name" : "Dhauldhar range", "height" : "4000 mtrs" }
// >