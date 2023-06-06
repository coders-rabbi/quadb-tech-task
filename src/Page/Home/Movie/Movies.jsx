import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../SectionTitle';
import MoviesCard from './MoviesCard';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    // console.log(movies);
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => {
                setMovies(data);
            })
    }, [])
    return (
        <div>
            <SectionTitle
                heading="ONLINE STREAMING" subHeading="Movies"
            ></SectionTitle>
            <div className='max-w-screen-xl mx-auto grid md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-16'>
                {
                    movies.map(movie =>
                    <MoviesCard
                        key={movie.show.id}
                        movie={movie.show}
                    ></MoviesCard>)
                }
            </div>
        </div>
    );
};

export default Movies;