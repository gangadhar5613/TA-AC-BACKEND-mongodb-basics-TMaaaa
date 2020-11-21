// show dbs
// admin   0.000GB
// config  0.000GB
// local   0.000GB
// test    0.000GB
// > use sports
// switched to db sports
// > db
// sports
// > show dbs
// admin   0.000GB
// config  0.000GB
// local   0.000GB
// test    0.000GB
// > db
// sports
// > show dbs
// admin   0.000GB
// config  0.000GB
// local   0.000GB
// test    0.000GB
// > db.createCollection("cricket")
// { "ok" : 1 }
// > show collections
// cricket
// > db.createCollection("football")
// { "ok" : 1 }
// > db.createCollection("TT")
// { "ok" : 1 }
// > {name:"gangadhar",age:22,"bid_price":2000}
// uncaught exception: SyntaxError: unexpected token: ':' :
// @(shell):1:21
// > show collections
// TT
// cricket
// football
// > db.createCollection("multiplePlayers",{capped:true,max:4})
// {
//         "ok" : 0,
//         "errmsg" : "the 'size' field is required when 'capped' is true",
//         "code" : 72,
//         "codeName" : "InvalidOptions"
// }
// > db.createCollection("multiplePlayers",{capped:true,size:500,max:4})
// { "ok" : 1 }
// > db.collection.insert("multiplePlayer")
// Error: argument to bsonsize has to be an object :
// addToOperationsList@src/mongo/shell/bulk_api.js:607:28
// Bulk/this.insert@src/mongo/shell/bulk_api.js:650:20
// DBCollection.prototype.insert@src/mongo/shell/collection.js:318:13
// @(shell):1:1
// > db.cricket.insert("multiplePlayer")
// Error: argument to bsonsize has to be an object :
// addToOperationsList@src/mongo/shell/bulk_api.js:607:28
// Bulk/this.insert@src/mongo/shell/bulk_api.js:650:20
// DBCollection.prototype.insert@src/mongo/shell/collection.js:318:13
// @(shell):1:1
// > db.collection.renameCollection(TT,tennis)
// uncaught exception: ReferenceError: TT is not defined :
// @(shell):1:1
// > db.TT.renameCollection("tennis")
// { "ok" : 1 }
// > show collection
// uncaught exception: Error: don't know how to show [collection] :
// shellHelper.show@src/mongo/shell/utils.js:1191:11
// shellHelper@src/mongo/shell/utils.js:819:15
// @(shellhelp2):1:1
// > show collections
// cricket
// football
// multiplePlayers
// tennis
// > db.multiplePlayers
// sports.multiplePlayers
// > db
// sports
// > db.createCollection("khokho",{capped:true,size:500,max:3})
// { "ok" : 1 }
// > db.khokho.insert({"name":20})
// WriteResult({ "nInserted" : 1 })
// > db.khokho.insert({"hello":10})
// WriteResult({ "nInserted" : 1 })
// > db.khokho({"me":20})
// uncaught exception: TypeError: db.khokho is not a function :
// @(shell):1:1
// > db.khokho.insert({"me":20})
// WriteResult({ "nInserted" : 1 })
// > show collections
// cricket
// football
// khokho
// multiplePlayers
// tennis
// > db.khokho.find().pretty()
// { "_id" : ObjectId("5fb8e7b4fa269860da4f5590"), "name" : 20 }
// { "_id" : ObjectId("5fb8e837fa269860da4f5591"), "hello" : 10 }
// { "_id" : ObjectId("5fb8e857fa269860da4f5592"), "me" : 20 }
// > db.khokho.isCapped()
// true
// > db.tennis.isCapped()
// false
// > db.foodball.drop()
// false
// > db.football.drop()
// true
// > db.cricket.remove()
// uncaught exception: Error: remove needs a query :
// DBCollection.prototype._parseRemove@src/mongo/shell/collection.js:362:15
// DBCollection.prototype.remove@src/mongo/shell/collection.js:389:18
// @(shell):1:1
// > db.sports.remove()
// uncaught exception: Error: remove needs a query :
// DBCollection.prototype._parseRemove@src/mongo/shell/collection.js:362:15
// DBCollection.prototype.remove@src/mongo/shell/collection.js:389:18
// @(shell):1:1
// > show collections
// cricket
// khokho
// multiplePlayers
// tennis
// > show dbs
// admin   0.000GB
// config  0.000GB
// local   0.000GB
// sports  0.000GB
// test    0.000GB
// > db.dropDatabase()
// { "dropped" : "sports", "ok" : 1 }
// > show dbs
// admin   0.000GB
// config  0.000GB
// local   0.000GB
// test    0.000GB
// > db
// sports
// > show collections
// > use test
// switched to db test
// > db
// test