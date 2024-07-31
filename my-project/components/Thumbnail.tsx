import Image from 'next/image'
import { Movie } from '../typing'

interface Props {
    movie: Movie
    onClick: (movie: Movie) => void  
}

function Thumbnail({ movie, onClick }: Props) {
  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => onClick(movie)} 
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt={movie.title || 'Movie Thumbnail'}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 text-white text-xs md:text-sm">
        <p className="truncate font-semibold">{movie.title}</p>
        <p className="text-xs">{movie.release_date}</p>
      </div>
    </div>
  )
}

export default Thumbnail