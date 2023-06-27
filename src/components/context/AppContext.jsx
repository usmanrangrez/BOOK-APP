import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("AppContext must be within AppCOntextProvider");
  }

  return context;
};

const AppContextProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  const addToFav = (item) => {
    const oldFav = [...fav];
    const newFav = oldFav.concat(item);

    setFav(newFav);
  };

  const remFromFav = (id) => {
    const oldFav = [...fav];
    const newFav = oldFav.filter((book) => book.id !== id);

    setFav(newFav);
  };

  return (
    <AppContext.Provider value={{ fav, addToFav, remFromFav }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
