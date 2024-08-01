
import { useState } from 'react';
import Image from 'next/image';
import { FaRegHeart, FaHeart } from 'react-icons/fa'; 
import { Movie } from '../typing';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { toggleFavorite } from '../redux/favoritesSlice';

interface Props {
    movie: Movie;
    onClick: (movie: Movie) => void;
}

const Thumbnail = ({ movie, onClick }: Props) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state) => state.favorites.favorites);
    const isFavorite = favorites.some(fav => fav.id === movie.id);

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(toggleFavorite(movie));
    };

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
                <button
                    className="absolute top-2 right-2"
                    onClick={handleFavoriteClick}
                    aria-label="Add to favorites"
                >
                    {isFavorite ? (
                        <FaHeart className="w-6 h-6 text-red-500" />
                    ) : (
                        <FaRegHeart className="w-6 h-6 text-white" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Thumbnail;
