const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const {
  getProfile,
  addRecipe,
  getRecipes,
  addNewUser,
  addLikedRecipe,
} = require("./handlers");

const port = 3000;

//this parses req.body, query or params  automatically when the body is recieved as a json string
const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

app.get("/hello", (req, res) => {
  res.status(200).json({ status: 200, message: "Hello world!" });
});
app.get("/recipes", getRecipes);
app.get("/profile/:id", getProfile);
app.post("/createuser", addNewUser);
app.patch("/addrecipe/:id", addRecipe);
app.patch("/addlikedrecipe/:id", addLikedRecipe);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
