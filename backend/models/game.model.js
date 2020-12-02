module.exports = (mongoose) => {
  let schema = mongoose.Schema({
    // immage
    type: String,
    title: String,
    summary: String,
    developer: String,
    genre: String,
    imgPath: String,
    __v: {
      type: Number,
      select: false,
    },
  });

  const Game = mongoose.model("games", schema);

  return Game;
};
