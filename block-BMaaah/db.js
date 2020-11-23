// assignment-1

// use blog





var articles = [
    {
        _id: 1,
        title: 'gadag',
        details: 'hdasjhd',
        author: {
          name: 'gangdahr',
          email: 'ganga@xyz.com',
          age: 22
        },
        tags: ['js', 'mongo']
      },
      {
        _id: 2,
        title: 'mongo',
        details: 'database',
        author: {
          name: 'lakshmi',
          email: 'xyz@gmail.com',
          age: 20
        },
        tags: ['js', 'mongo']
      },
      {
        _id: 3,
        title: 'ghdhgg',
        details: 'mango',
        author: {
          name: 'mongo',
          email: 'dhdg@gmail.com',
          age: 30
        },
        tags: ['js', 'mongo']
      },

]



// db
// test
// > use blog
// switched to db blog
// > db.createCollection('articles')
// { "ok" : 1 }
// > show collections
// articles
// > var articles = [
// ...     {
// ...         _id: 1,
// ...         title: 'gadag',
// ...         details: 'hdasjhd',
// ...         author: {
// ...           name: 'gangdahr',
// ...           email: 'ganga@xyz.com',
// ...           age: 22
// ...         },
// ...         tags: ['js', 'mongo']
// ...       },
// ...       {
// ...         _id: 2,
// ...         title: 'mongo',
// ...         details: 'database',
// ...         author: {
// ...           name: 'lakshmi',
// ...           email: 'xyz@gmail.com',
// ...           age: 20
// ...         },
// ...         tags: ['js', 'mongo']
// ...       },
// ...       {
// ...         _id: 3,
// ...         title: 'ghdhgg',
// ...         details: 'mango',
// ...         author: {
// ...           name: 'mongo',
// ...           email: 'dhdg@gmail.com',
// ...           age: 30
// ...         },
// ...         tags: ['js', 'mongo']
// ...       },
// ...
// ... ]
// > db.articles.insertMany(articles)
// { "acknowledged" : true, "insertedIds" : [ 1, 2, 3 ] }
// > db.articles.find()
// { "_id" : 1, "title" : "gadag", "details" : "hdasjhd", "author" : { "name" : "gangdahr", "email" : "ganga@xyz.com", "age" : 22 }, "tags" : [ "js", "mongo" ] }
// { "_id" : 2, "title" : "mongo", "details" : "database", "author" : { "name" : "lakshmi", "email" : "xyz@gmail.com", "age" : 20 }, "tags" : [ "js", "mongo" ] }
// { "_id" : 3, "title" : "ghdhgg", "details" : "mango", "author" : { "name" : "mongo", "email" : "dhdg@gmail.com", "age" : 30 }, "tags" : [ "js", "mongo" ] }
// > db.articles.find({title:"gadag"})
// { "_id" : 1, "title" : "gadag", "details" : "hdasjhd", "author" : { "name" : "gangdahr", "email" : "ganga@xyz.com", "age" : 22 }, "tags" : [ "js", "mongo" ] }
// >