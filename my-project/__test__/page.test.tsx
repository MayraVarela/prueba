import {render, screen, } from '@testing-library/react'
import '@testing-library/jest-dom';
import Home  from '../app/page'

jest.mock('../utils/request', () => ({
    fetchNetflixOriginals: 'api/netflixOriginals',
    fetchTrending: 'api/trendingNow',
    fetchTopRated: 'api/topRated',
    fetchActionMovies: 'api/actionMovies',
    fetchComedyMovies: 'api/comedyMovies',
    fetchHorrorMovies: 'api/horrorMovies',
    fetchRomanceMovies: 'api/romanceMovies',
    fetchDocumentaries: 'api/documentaries',
  }))
  
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ results: [] }),
    })
  )
  
  it('renders loading state initially', () => {
    render(<Home />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
  
  it('renders page titles after loading', async () => {
    render(<Home />)
  
   
    const trendingTitle = await screen.findByText('Trending Now')
    expect(trendingTitle).toBeInTheDocument()
  
    expect(screen.getByText('Top Rated')).toBeInTheDocument()
    expect(screen.getByText('Action Thrillers')).toBeInTheDocument()
    expect(screen.getByText('Comedies')).toBeInTheDocument()
    expect(screen.getByText('Scary Movies')).toBeInTheDocument()
    expect(screen.getByText('Romance Movies')).toBeInTheDocument()
    expect(screen.getByText('Documentaries')).toBeInTheDocument()
  })