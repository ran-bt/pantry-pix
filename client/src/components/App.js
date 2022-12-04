import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";

import Header from "./Header";
import Home from "./Home";

import Profile from "./Profile";
import RecipeDetail from "./RecipeDetail";
import SearchByIngredient from "./SearchByIngredient";
import Test from "./IngredientSearch";
import CreateRecipe from "./createRecipe/CreateRecipe";
import AddRecipe from "./createRecipe/AddRecipe";

const App = () => {
  const [recipes, setRecipes] = useState(null);
  const [searchedByIngResults, setSearchedByIngResults] = useState(null);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              recipes={recipes}
              setRecipes={setRecipes}
              searchedByIngResults={searchedByIngResults}
              setSearchedByIngResults={setSearchedByIngResults}
            />
          }
        />
        <Route
          path="/recipe-detail/:id"
          element={
            <RecipeDetail
              recipes={recipes}
              //recipes={searchedByIngResults}
            />
          }
        />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test />} />
        <Route path="/search" element={<SearchByIngredient />} />
        <Route path="/createrecipe" element={<AddRecipe />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
