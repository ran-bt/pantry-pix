import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const CurrentUserContext = createContext(null);

const CurrentUserProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();
  const [currentUser, setCurrentUser] = useState();
  const [status, setStatus] = useState("loading");
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [createdRecipes, setCreatedRecipes] = useState([]);
  // Fetch the user data from the server
  // When the data is received, update currentUser.
  // Also, set `status` to `idle`

  useEffect(() => {
    setStatus(true);
    fetch(`/profile/${user}`)
      .then((res) => res.json())
      .then((data) => {
        //    console.log(data);
        // setCurrentUser(data);
        setIsLoggedIn(true);
        setStatus(false);
      })
      .catch(() => {
        setIsLoggedIn(false);
        setStatus(false);
      });
  }, []);

  return status === true ? (
    <p>Loading!!!!...</p>
  ) : (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        status,
        setStatus,
        likedRecipes,
        setLikedRecipes,
        createdRecipes,
        setCreatedRecipes,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
