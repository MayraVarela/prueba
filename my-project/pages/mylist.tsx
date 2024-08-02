import { useAppSelector } from '../redux/hooks'; 
import { Movie } from '../typing'; 
import { RootState } from '../redux/store';


const MyList = () => {
  
  const favorites = useAppSelector((state: RootState) => state.favorites.favorites);

  return (
    <div>
      <h1>My Favorite Movies</h1>
      <ul>
        {favorites.length > 0 ? (
          favorites.map((movie: Movie) => (
            <li key={movie.id}>
              <div>
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              </div>
            </li>
          ))
        ) : (
          <p>No favorite movies yet.</p>
        )}
      </ul>
    </div>
  );
};


export default MyList;
