import mongoose from "mongoose";

const AnimeSchema = mongoose.Schema({
    animeName: {
        type: String,
        required: [true, "Anime name is required"]
    },

    genre: {
        type: String,
        required: true
    },

    episodes: {
        type: Number,
    },

    rating: {
        type: Number,
        default: 3.5
    },

    isDubbed: {
        type: Boolean,
        default: false
    },
})

const Anime = mongoose.model("Anime", AnimeSchema);

export default Anime;