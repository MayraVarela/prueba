import { useState, useEffect } from 'react'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    searchQuery: string
}

const baseUrl = 'https://image.tmdb.org/t/p/w500/'

function Modal({ isOpen, onClose, searchQuery }: ModalProps) {
    const [movies, setMovies] = useState<any[]>([])

    useEffect(() => {
        if (searchQuery) {
            const fetchMovies = async () => {
                try {
                    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d49ab09a0c4fab20900236d6e4830176&query=${searchQuery}`)
                    if (!response.ok) throw new Error('Network response was not ok')
                    const data = await response.json()
                    setMovies(data.results || [])
                } catch (error) {
                    console.error('Failed to fetch movies:', error)
                    setMovies([])
                }
            }
            fetchMovies()
        } else {
            setMovies([])
        }
    }, [searchQuery])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded w-full max-w-md">
                <button onClick={onClose} className="text-red-500">Close</button>
                <h2 className="text-xl font-bold mb-4">Search Results</h2>
                <div className="grid grid-cols-2 gap-4">
                    {movies.length > 0 ? (
                        movies.map((movie: any) => (
                            <div key={movie.id} className="flex flex-col items-center">
                                {movie.poster_path ? (
                                    <img
                                        src={`${baseUrl}${movie.poster_path}`}
                                        alt={movie.title}
                                        className="w-full h-auto"
                                    />
                                ) : (
                                    <div className="w-full h-auto bg-gray-300 flex items-center justify-center text-gray-600">No Image</div>
                                )}
                                <h3 className="text-lg mt-2">{movie.title}</h3>
                            </div>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Modal

