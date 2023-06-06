import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className='text-center w-1/3 mx-auto mb-10'>
            <p className='text-2xl py-3 text-[#E4D804]'>{subHeading}</p>
            <p className='text-5xl uppercase py-3 mt-3 text-white font-bold'>{heading}</p>
            
        </div>
    );
};

export default SectionTitle;