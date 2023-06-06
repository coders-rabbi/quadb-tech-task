import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailsCard = ({ movies }) => {
    const movieID = useParams();
    console.log(movieID);
    return (
        <div>

        </div>
    );
};

export default MovieDetailsCard;