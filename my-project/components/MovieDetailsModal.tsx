import { useState } from 'react'
import { Movie } from '../typing'

interface Props {
  movie: Movie
  onClose: () => void
}

const MovieDetailsModal = ({ movie, onClose }: Props) => {
  const [rating, setRating] = useState<number | null>(null)
  const [comment, setComment] = useState('')

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value))
  }

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setRating(null)
    setComment('')
    onClose()
  }

  const handleClear = () => {
    setComment('')
  }



  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-4xl relative">
        <button
          className="absolute top-2 right-2 text-gray-600 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex gap-6">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
            alt={movie.title}
            className="w-1/3 h-auto rounded"
          />
          <div className="w-2/3">
            <h2 className="text-3xl font-semibold mb-2 text-black">{movie.title}</h2>
            <p className="text-lg text-black mb-4">{movie.overview}</p>
            <p className="text-black mb-2"><strong>Release Date:</strong> {movie.release_date}</p>
            <p className="text-black mb-2"><strong>Original Language:</strong> {movie.original_language}</p>
            <p className="text-black mb-2"><strong>Popularity:</strong> {movie.popularity.toFixed(1)}</p>
            <p className="text-black mb-2"><strong>Average Rating:</strong> {movie.vote_average}</p>
            <p className="text-black mb-4"><strong>Number of Votes:</strong> {movie.vote_count}</p>
        
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="rating" className="block mb-2 text-black">Rate this movie:</label>
                <input
                  id="rating"
                  type="number"
                  min="1"
                  max="10"
                  step="1"
                  value={rating ?? ''}
                  onChange={handleRatingChange}
                  className="border border-gray-300 p-2 rounded w-full text-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="comment" className="block mb-2 text-black">Your Comment:</label>
                <textarea
                  id="comment"
                  rows={4}
                  value={comment}
                  onChange={handleCommentChange}
                  className="border border-gray-300 p-2 rounded w-full text-black"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsModal



