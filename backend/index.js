const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const authRoutes = require('./routes/authRoutes'); // Make sure this path is correct

const app = express();

app.use(express.json()); // for parsing application/json

const uri = "mongodb+srv://tristankaupa:6ST88IObcb8LUrgs@cluster0.yks6ipy.mongodb.net/login-db?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("qaware-login-db"); // Set your database name
    app.locals.database = database; // Make the database accessible to routes

    // Use routes
    app.use('/api/auth', authRoutes);
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
    process.exit(1);
  }
}

run().catch(console.dir);
