//test data already added

// const { users } = require("./TestData");

// const { MongoClient } = require("mongodb");
// require("dotenv").config();

// const { MONGO_URI } = process.env;

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// const batchImports = async () => {
//   const client = new MongoClient(MONGO_URI, options);

//   try {
//     await client.connect();
//     const db = client.db("pantry");

//     const userData = await db.collection("users").insertMany(users);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     client.close();
//   }
// };

// //console.log(flightData);

// batchImports();
