import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../typing";

interface FavoritesState {
  favorites: Movie[];
}
const initialState: FavoritesState = {
    favorites: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('favorites') || '[]') : [],
  };
  
  export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
      toggleFavorite: (state, action: PayloadAction<Movie>) => {
        const movie = action.payload;
        const exists = state.favorites.some((fav) => fav.id === movie.id);
  
        if (exists) {
          
          state.favorites = state.favorites.filter((fav) => fav.id !== movie.id);
        } else {
         
          state.favorites.push(movie);
        }
  
       
        if (typeof window !== 'undefined') {
          localStorage.setItem('favorites', JSON.stringify(state.favorites));
        }
      },
      setFavorites: (state, action: PayloadAction<Movie[]>) => {
        state.favorites = action.payload;
        
        
        if (typeof window !== 'undefined') {
          localStorage.setItem('favorites', JSON.stringify(state.favorites));
        }
      },
      clearFavorites: (state) => {
        state.favorites = [];
        
      
        if (typeof window !== 'undefined') {
          localStorage.removeItem('favorites');
        }
      },
    },
  });
  
  export const { toggleFavorite, setFavorites, clearFavorites } = favoritesSlice.actions;
  
  export default favoritesSlice.reducer;