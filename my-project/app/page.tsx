"use client";

import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import requests from '../utils/request'
import { Movie } from '../typing'
import { useEffect, useState } from 'react'
import Row from '../components/Row'
import Modal from '../components/Modal'
import MovieDetailsModal from '../components/MovieDetailsModal'

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

const Home = () => {
    const [data, setData] = useState<Props | null>(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [isFavorite, setIsFavorite] = useState<boolean>(false) 

    useEffect(() => {
        const fetchData = async () => {
            const [
                netflixOriginals,
                trendingNow,
                topRated,
                actionMovies,
                comedyMovies,
                horrorMovies,
                romanceMovies,
                documentaries,
            ] = await Promise.all([
                fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
                fetch(requests.fetchTrending).then((res) => res.json()),
                fetch(requests.fetchTopRated).then((res) => res.json()),
                fetch(requests.fetchActionMovies).then((res) => res.json()),
                fetch(requests.fetchComedyMovies).then((res) => res.json()),
                fetch(requests.fetchHorrorMovies).then((res) => res.json()),
                fetch(requests.fetchRomanceMovies).then((res) => res.json()),
                fetch(requests.fetchDocumentaries).then((res) => res.json()),
            ])

            setData({
                netflixOriginals: netflixOriginals.results,
                trendingNow: trendingNow.results,
                topRated: topRated.results,
                actionMovies: actionMovies.results,
                comedyMovies: comedyMovies.results,
                horrorMovies: horrorMovies.results,
                romanceMovies: romanceMovies.results,
                documentaries: documentaries.results,
            })
        }

        fetchData()
    }, [])

    const handleSearch = (query: string) => {
        setSearchQuery(query)
        setModalOpen(true)
    }

    const handleMovieClick = (movie: Movie) => {
        setSelectedMovie(movie)
    }

    const handleCloseModal = () => {
        setSelectedMovie(null)
        setModalOpen(false)
    }

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}>
            <Head>
                <title>Home - MoviesApi -IpGlobal</title>
                <link rel="icon" href="/favicon.co" />
            </Head>

            <Header onSearch={handleSearch} />

            <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
                <Banner netflixOriginals={data.netflixOriginals} />

                <section className="md:space-y-24">
                    <Row
                      title="Trending Now"
                      movies={data.trendingNow}
                      onMovieClick={handleMovieClick} 
                    />
                    <Row
                      title="Top Rated"
                      movies={data.topRated}
                      onMovieClick={handleMovieClick}
                    />
                    <Row
                      title="Action Thrillers"
                      movies={data.actionMovies}
                      onMovieClick={handleMovieClick}
                    />
                    <Row
                      title="Comedies"
                      movies={data.comedyMovies}
                      onMovieClick={handleMovieClick}
                    />
                    <Row
                      title="Scary Movies"
                      movies={data.horrorMovies}
                      onMovieClick={handleMovieClick}
                    />
                    <Row
                      title="Romance Movies"
                      movies={data.romanceMovies}
                      onMovieClick={handleMovieClick}
                    />
                    <Row
                      title="Documentaries"
                      movies={data.documentaries}
                      onMovieClick={handleMovieClick}
                    />
                </section>
            </main>

            <Modal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                searchQuery={searchQuery}
            />

            {selectedMovie && (
                <MovieDetailsModal 
                  movie={selectedMovie}
                  onClose={handleCloseModal}
                  isFavorite={isFavorite}
                  toggleFavorite={toggleFavorite}
                />
            )}
        </div>
    )
}

export default Home

