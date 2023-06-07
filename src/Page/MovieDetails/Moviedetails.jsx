import { useEffect, useState } from 'react';
import './MovieDetails.css'
import { Link, useParams } from 'react-router-dom';
import { FaRegClock, FaCalendarAlt, FaShareAlt, FaBookmark } from "react-icons/fa";
import BookingForm from '../BookingForm/BookingForm';

const Moviedetails = () => {
    const [movies, setMovies] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const selectedId = useParams();
    const ID = selectedId.details;


    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then((res) => res.json())
            .then((data) => setMovies(data));
    }, []);
    const movie = movies.find((mov) => mov.show.id == ID);


    return (
        <div className='movieDetails-bg py-72 text-white'>
            <div className='max-w-screen-xl mx-auto md:flex justify-center items-center'>
                <div className='flex justify-center'>
                    <img className='w-96' src={movie?.show?.image?.original} alt="" />
                </div>
                <div className='w-1/2 ms-16'>
                    <h3 className='text-3xl text-[#E4D804]'>{movie?.show?.language}</h3>
                    <h2 className='text-5xl mt-6'>{movie?.show?.name}</h2>
                    <div className='md:flex justify-between items-center mt-8 mb-10'>
                        <p className='md:border py-1 px-2 text-[#E4D804]'>HD</p>
                        <p>{movie?.show?.genres[0]},{movie?.show?.genres[1]}</p>
                        <p className='text-[#E4D804] flex items-center'><FaCalendarAlt className="text-[#E4D804]" />{movie?.show?.premiered}</p>
                        <p className="flex items-center gap-2"><FaRegClock className="text-[#E4D804]" />{movie?.show?.runtime} min</p>
                    </div>
                    <p className='mb-10'>{movie?.show?.summary}</p>
                    <div className='md:flex justify-between bg-[#242C38] shadow-2xl p-6 rounded-xl'>
                        <div className='md:border-r-4 border-indigo-500 px-6'>
                            <FaShareAlt className='text-xl font-bold mb-1' />
                            share
                        </div>
                        <div>
                            <h1 className='text-xl font-bold mb-1'>Prime Video</h1>
                            <p>Streaming Channels</p>
                        </div>
                        <Link>
                            <button onClick={() => setShowModal(true)} className="btn btn-outline border-[#E4D804] rounded-full text-white"><FaBookmark className="text-[#E4D804]" />Booked Now</button>
                        </Link>
                    </div>
                </div>
            </div>
            <BookingForm movie={movie} isVisible={showModal} onClose={() => setShowModal(false)} ></BookingForm>
        </div>
    );
};

export default Moviedetails;