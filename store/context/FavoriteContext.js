import { useState } from "react";
import { createContext } from "react"


export const FavoriteContextModule = createContext({
    test: false
});

export default function FavoriteContext({ children }) {

    const [favorites, setFavorites] = useState([]);

    function addFavorite(foodID) {
        if (!favorites.includes(foodID)) {
            setFavorites([...favorites, foodID])
        }
    }


    function removeFavorite(foodID) {
        if (favorites.includes(foodID)) {
            setFavorites(favorites.filter(item => item !== foodID))

        }
    }



    return (
        <FavoriteContextModule.Provider value={{ favorites: favorites, add: addFavorite, remove: removeFavorite }}>
            {children}
        </FavoriteContextModule.Provider>
    )
}