// List Collections:

   //  show collections

//    show dbs
//    admin   0.000GB
//    config  0.000GB
//    local   0.000GB
//    test    0.000GB
//    > show collecions
//    uncaught exception: Error: don't know how to show [collecions] :
//    shellHelper.show@src/mongo/shell/utils.js:1191:11
//    shellHelper@src/mongo/shell/utils.js:819:15
//    @(shellhelp2):1:1
//    > show collections
//    countryName
//    > db
//    test
//    > use weather
//    switched to db weather
//    > db
//    weather
//    > db.createCollection("temperature",{capped:true, size:500, max:3})
//    { "ok" : 1 }
//    >
//    > db.temperature.insert({"delhi":20})
//    WriteResult({ "nInserted" : 1 })
//    > db.temperature({"myplace":10})
//    uncaught exception: TypeError: db.temperature is not a function :
//    @(shell):1:1
//    > db.temperture.insert({"myplace":10})
//    WriteResult({ "nInserted" : 1 })
//    > db.temperature.insert({"hp":0})
//    WriteResult({ "nInserted" : 1 })
//    > db.temperature.insert({"ap":2})
//    WriteResult({ "nInserted" : 1 })
//    > db.temperature.find().pretty()
//    { "_id" : ObjectId("5fb8dfe22ac34ad8d866d0b6"), "delhi" : 20 }
//    { "_id" : ObjectId("5fb8e01f2ac34ad8d866d0b8"), "hp" : 0 }
//    { "_id" : ObjectId("5fb8e0332ac34ad8d866d0b9"), "ap" : 2 }
//    > db.temperature.insert({"place":10})
//    WriteResult({ "nInserted" : 1 })
//    > db.temperature.find().pretty()
//    { "_id" : ObjectId("5fb8e01f2ac34ad8d866d0b8"), "hp" : 0 }
//    { "_id" : ObjectId("5fb8e0332ac34ad8d866d0b9"), "ap" : 2 }
//    { "_id" : ObjectId("5fb8e0842ac34ad8d866d0ba"), "place" : 10 }
//    > db
//    weather
//    > show collections
//    temperature
//    temperture
//    > db.createCollection("humidity")
//    { "ok" : 1 }
//    > show collections
//    humidity
//    temperature
//    temperture
//    > db.humidity.remove()
//    uncaught exception: Error: remove needs a query :
//    DBCollection.prototype._parseRemove@src/mongo/shell/collection.js:362:15
//    DBCollection.prototype.remove@src/mongo/shell/collection.js:389:18
//    @(shell):1:1
//    > show collections
//    humidity
//    temperature
//    temperture
//    > db.humidity.drop()
//    true
//    > show collections
//    temperature
//    temperture
//    > db.dropDatabase()
//    { "dropped" : "weather", "ok" : 1 }
//    > db
//    weather
//    > dbs
//    uncaught exception: ReferenceError: dbs is not defined :
//    @(shell):1:1
//    > show dbs
//    admin   0.000GB
//    config  0.000GB
//    local   0.000GB
//    test    0.000GB
//    >