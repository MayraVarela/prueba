import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';
import { movieApi } from './api/userApi';


export const store = configureStore({
    reducer: {
      favorites: favoritesReducer,
      [movieApi.reducerPath]: movieApi.reducer,  
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieApi.middleware),  
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;