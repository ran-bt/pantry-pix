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
import Test from "./Test";

const App = () => {
  const [recipes, setRecipes] = useState(null);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home recipes={recipes} setRecipes={setRecipes} />}
        />
        <Route path="/recipe-detail/:id" element={<RecipeDetail />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/test" element={<Test />} />
        <Route path="/search" element={<SearchByIngredient />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
