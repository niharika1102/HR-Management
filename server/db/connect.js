// const mongoose = require('mongoose');

// const db = process.env.DB_CLOUD_LINK.replace(
//     '<PASSWORD>', 
//     process.env.DB_PASSWORD
// );

// mongoose.connect(db).then(()=>{
//     console.log("DB succesfully connected!");
// }).catch((error)=>{
//     console.log("Error in db", error.message);
// })


const mongoose = require('mongoose');

// Use the local MongoDB URI
const localDB = process.env.DATABASEURL || 'mongodb://localhost:27017/your_database_name';

mongoose.connect(localDB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
})
  .then(() => {
    console.log("DB successfully connected!");
  })
  .catch((error) => {
    console.log("Error in db connection:", error.message);
  });
