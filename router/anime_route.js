import express from "express";
import { getAllAnime } from "../controllers/anime_controller.js";

const router = express.Router();

// HTTP methods
router.get("/", getAllAnime);

export default router;