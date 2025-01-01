import "dotenv/config";
import Anime from "./model/anime_model.js";
import AnimeJson from "./AnimeData.json" assert { type: "json" };;
import connectDB from "./DB_connection/db_connection.js";

const createRecord = async () => {
  try {
    await connectDB();
    await Anime.deleteMany();
    await Anime.create(AnimeJson);
    console.log("Data added to DB successfully");
  } catch (error) {
    console.log("Error while adding data to the database", error);
  }
};

createRecord();
