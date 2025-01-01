import anime_model from "../model/anime_model.js";

export const getAllAnime = async (req, res) => {
  const { animeName, isDubbed, genre, sort, select } = req.query;
  let queryObject = {};

  if (animeName) {
    queryObject.animeName = { $regex: animeName, $options: "i" };
  }

  if (isDubbed) {
    queryObject.isDubbed = isDubbed;
  }

  if (genre) {
    queryObject.genre = { $regex: genre, $options: "i" };
  }

  let apiData = anime_model.find(queryObject);

  // sorting
  if (sort) {
    let formattedSort = sort.split(",").join(" ");
    apiData = apiData.sort(formattedSort);
  }

  // select
  if (select) {
    let formattedSelect = select.split(",").join(" ");
    apiData = apiData.select(formattedSelect);
  }

  // pagination
  // let page = Number(req.query.page) || 1;
  // let limit = Number(req.query.limit) || 10;
  // let skip = (page - 1) * limit;

  // apiData = apiData.skip(skip).limit(limit);

  try {
    const Anime = await apiData;
    return res.json({ Anime, nbHits: Anime.length });
  } catch (error) {
    return res.status(500).json({ error: "Error fetching anime data" });
  }
};
