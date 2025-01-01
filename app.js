  import "dotenv/config";
  import cors from "cors";
  import express from "express";
  import anime_route from "./router/anime_route.js";
  import connectDB from "./DB_connection/db_connection.js";
  
  const app = express();
  const PORT = process.env.PORT || 3000;
  
  app.use(cors());
  app.use(express.json());
  
  
  app.get("/", (req, res) => {
    res.send("I am the devil of my word");
  });
  
  app.use("/api/anime", anime_route);

  const start = async () => {
    try {
      await connectDB();
      app.listen(PORT, () => {
        console.log(`${PORT} is up and running`);
      });
    } catch (error) {
      console.log("Error making connection with DB", error);
    }
  };

  start();
