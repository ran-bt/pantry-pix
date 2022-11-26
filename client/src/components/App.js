import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import GlobalStyles from "./GlobalStyles";

import Header from "./Header";
import Home from "./Home";
import Profile from "./Profile";
import RecipeDetail from "./RecipeDetail";

const App = () => {
  const { SPOONACULAR_KEY } = process.env;
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-detail/:id" element={<RecipeDetail />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
