import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import MovieDetailsCard from './MovieDetailsCard';

const Moviedetails = () => {
    const [allMovies, setAllMovies] = useState();
    const movies = useLoaderData();
    const movieID = useParams();
    
    return (
        <div>
            
        </div>
    );
};

export default Moviedetails;