// use cockpitKart
// Inserting data in mongo db
db.items.insertOne({name:"Samsung F62",price:23999,rating:3.9,qty: 7000, sold:1280})
db.items.insertMany([{name:"Samsung F62",price:23999,rating:3.9,qty: 7000, sold:1280, isHeavy:true},{name:"Samsung A17",price:16999,rating:4.4,qty: 6700, sold:4680},{name:"Samsung A30",price:17390,rating:4.0,qty: 4000, sold:2700}])
//Querying data from mongo db
db.items.find({rating:3.9})
db.items.find({rating:{$gte: 3.9}})
//And operator
db.items.find({rating:{$gte: 3.9},price:{$gt: 17000}})
//Or operator
db.items.find({$or:[{rating:{$gte: 3.9}},{price:{$gt: 17000}}]})
//Key:1 //Shows that respective key along with its value
db.items.find({rating:{$gt: 3.9}},{rating:1})
db.items.find({rating:{$gt: 3.9}},{rating:1, qty:1})
//Deleting data from mongo db
db.items.deleteOne({price:23999})
db.items.deleteMany({price:23999})
//Updating data in mongo db
db.items.updateOne({name:"Samsung A17"},{$set:{price:14999}})
db.items.updateMany({name:"Samsung A17"},{$set:{price:14999,rating:3.4}})