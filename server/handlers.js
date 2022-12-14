"use strict";
const request = require("request-promise");
const { MongoClient, ObjectId } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const { MONGO_URI } = process.env;
const { REACT_APP_API_KEY1 } = process.env;
const { REACT_APP_API_KEY } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
//This function created a new user in the database
const addNewUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  const email = req.body.email;

  try {
    await client.connect();
    const db = client.db("pantry");
    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      res.status(200).json({
        status: 200,
        message: `User already registered. `,
        data: existingUser,
      });
    } else {
      const accountInfo = req.body;
      const newUser = await db
        .collection("users")
        .insertOne({ _id: uuidv4(), ...accountInfo });
      res.status(200).json({
        status: 200,
        message: `User registered. `,
        data: accountInfo,
      });
    }

    // const user = await db
    //   .collection("pantry")
    //   .find({ _id: ObjectId(newUser.insertedId) })
    //   .toArray();
    /////////////////
    // const user = await db
    //   .collection("users")
    //   .find({ _id: ObjectId(newUser.insertedId) })
    //   .toArray();

    // if (newUser) {
    //   res.status(200).json({
    //     status: 200,
    //     message: `User created. `,
    //     data: user,
    //   });
    // } else {
    //   res.status(404).json({
    //     status: 404,
    //     message: "Unable to create user",
    //   });
    // }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, message: err.message });
  } finally {
    client.close();
  }
};

const getRecipes = async (req, res) => {
  try {
    const response = await request(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY1}&ingredients=pineapples,+flour,+rice,+chicken&number=5`
    );

    res.status(200).send(response);
  } catch (err) {
    res.status(400).json({ status: 400, message: err });
  }
};

const getProfile = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("pantry");
    const userId = req.params.id;
    console.log(userId);

    const users = await db
      .collection("users")
      .find({ recipeId: userId })
      .toArray();
    // console.log("users:", users);

    if (users) {
      res.status(200).json({
        status: 200,
        data: users,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Unsuccessfull! No user found",
      });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  } finally {
    client.close();
  }
};

const addRecipe = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const userId = req.params.id;

  try {
    const newRecipe = req.body;
    // const recipe = (newRecipe.recipeId = uuidv4());

    // console.log("New recipe", newRecipe);
    console.log("New recipe", req.body);
    //console.log("TESTING!!", newRecipe.ingredients[0]);

    if (newRecipe) {
      await client.connect();
      const db = client.db("pantry");

      const users = await db.collection("users").updateOne(
        // { _id: userId },
        // {
        //   $set: {
        //     createdRecipes: [recipe],
        //   },
        // }

        ////working
        { _id: userId },

        // { _id: userId },
        // {
        //   $set: {
        //     createdRecipes: [newRecipe],
        //   },
        // }

        ////////////
        {
          $push: req.body,
        }
      );

      const updatedData = await db
        .collection("users")
        .findOne({ _id: req.params.id });
      console.log("updated User", updatedData);

      res.status(200).json({
        status: 200,
        message: "Congrats!! You added a new recipe",
        data: updatedData,
      });
    } else {
      //console.log("Response fr Mongo", users);
      res.status(404).json({
        status: 404,
        message: "Missing Information",
      });
    }
  } catch (err) {
    //console.log("Response fr Mongo", users);
    console.log(err);
    res.status(500).json({ status: 500, message: err.message });
  } finally {
    client.close();
  }
};

/// this function adds the user's liked recipes to the database and returns the updated document

const addLikedRecipe = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const id = req.params.id;
  //const userId = parseInt(id);
  //console.log(userId);
  try {
    const likedRecipes = req.body.likedRecipeId;
    //console.log("LIKED RECIPES", likedRecipes);
    if (likedRecipes) {
      await client.connect();
      const db = client.db("pantry");

      const users = await db.collection("users").updateOne(
        { _id: req.params.id },
        {
          $set: {
            likedRecipeId: likedRecipes,
          },
        }
      );
      //console.log("USERS ARRAY", users);
      const updatedUserData = await db
        .collection("users")
        .findOne({ _id: req.params.id });
      //console.log("updated User", updatedUserData);
      res.status(200).json({
        status: 200,
        message: "Congrats!! You liked/unliked a recipe",
        data: updatedUserData.likedRecipeId,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Missing Information",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: err.message });
  } finally {
    client.close();
  }
};

module.exports = {
  getProfile,
  addRecipe,
  getRecipes,
  addNewUser,
  addLikedRecipe,
};
