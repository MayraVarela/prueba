import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../redux/favoritesSlice' 
import MyList from '../pages/mylist'
import '@testing-library/jest-dom';


const renderWithRedux = (state = { favorites: { favorites: [] } }) => {
    const store = configureStore({
      reducer: {
        favorites: favoritesReducer, 
      },
      preloadedState: state,
    })
  
    return render(
      <Provider store={store}>
        <MyList />
      </Provider>
    )
  }
  
  describe('MyList Component', () => {
    it('renders "No favorite movies yet." when there are no favorites', () => {
      renderWithRedux({ favorites: { favorites: [] } })
      expect(screen.getByText('No favorite movies yet.')).toBeInTheDocument()
    })
  
    it('renders favorite movies when they are available', () => {
      const favoriteMovies = [
        {
          id: 1,
          title: 'Inception',
          release_date: '2010-07-16',
          poster_path: '/poster1.jpg',
        },
        {
          id: 2,
          title: 'The Matrix',
          release_date: '1999-03-31',
          poster_path: '/poster2.jpg',
        },
      ]
  
      renderWithRedux({ favorites: { favorites: favoriteMovies } })
  
      expect(screen.getByText('My Favorite Movies')).toBeInTheDocument()
      expect(screen.getByText('Inception')).toBeInTheDocument()
      expect(screen.getByText('2010-07-16')).toBeInTheDocument()
      expect(screen.getByText('The Matrix')).toBeInTheDocument()
      expect(screen.getByText('1999-03-31')).toBeInTheDocument()
  
      favoriteMovies.forEach(movie => {
        expect(screen.getByAltText(movie.title)).toBeInTheDocument()
      })
    })
  })