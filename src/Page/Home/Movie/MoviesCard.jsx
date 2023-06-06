import { FaRegClock, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const MoviesCard = ({ movie }) => {
    const { id, name, image, premiered, rating, runtime } = movie;
    return (
        <div>
            <div className='text-white'>
                <img className='w-72 mb-6' src={image.medium} alt="" />
                <div className='text-white flex justify-between mb-4 text-xl font-semiboldbold'>
                    <h3>{name}</h3>
                    <p className='text-[#E4D804]'>{premiered}</p>
                </div>
                <div className='flex justify-between '>
                    <p className='border py-1 px-2 text-[#E4D804]'>HD</p>
                    <p className="flex items-center gap-2"><FaRegClock className="text-[#E4D804]" />{runtime} min</p>
                    <p className='flex items-center gap-2'><FaThumbsUp className="text-[#E4D804]" />{rating?.average}</p>
                </div>
                <Link to={`/movie/${id}`}>
                    <button className="btn btn-block btn-outline btn-secondary border-0 border-b-4 mx-auton-block mt-2">Movie Details</button>
                </Link>
            </div>
        </div>
    );
};

export default MoviesCard;