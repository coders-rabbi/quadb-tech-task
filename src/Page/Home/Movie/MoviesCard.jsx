import React from 'react';

const MoviesCard = ({ movie }) => {
    const { name, image, premiered } = movie;
    return (
        // <div className="card card-compact bg-slate-50 w-96 shadow-xl">
        //     <img src={image.medium} alt="Shoes" />
        //     <div className="">
        //         <h2 className="card-title">{name}</h2>
        //         <p>If a dog chews shoes whose shoes does he choose?</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Buy Now</button>
        //         </div>
        //     </div>
        // </div>
        <div>
            <div>
                <img className='w-72' src={image.medium} alt="" />
                <div className='text-white flex justify-between'>
                    <h3>{name}</h3>
                    <p>{premiered}</p>
                </div>
            </div>
        </div>
    );
};

export default MoviesCard;