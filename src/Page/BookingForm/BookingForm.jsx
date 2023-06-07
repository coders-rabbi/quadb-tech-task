import React from 'react';
import Swal from 'sweetalert2';

const BookingForm = ({ isVisible, onClose, movie }) => {
    const BookMovie = movie;
    if (!isVisible) return null;
    const id = BookMovie?.show?.id;
    const Moviename = BookMovie?.show?.name;

    // 
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const mobile = form.mobile.value;
        const date = form.date.value;
        const details = { id: id, Moviename: Moviename, mobile: mobile, date: date };

        let bookingMovie = {};

        const BookedMove = localStorage.getItem('Booking');
        if(BookedMove){
            bookingMovie = JSON.parse(BookedMove);
        }
        else{
            bookingMovie = {};
        }
        const quantity = bookingMovie[details];
        if(quantity){
            const newQuantity = quantity + 1;
            bookingMovie[details] = newQuantity;
        }
        else{
            bookingMovie= details;

        }
        localStorage.setItem('Booking', JSON.stringify(bookingMovie))
    }




    return (
        <div className='fixed inset-0  bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>

            <div className='w-[600px] flex flex-col'>
                <button onClick={() => onClose()} className="btn btn-circle btn-outline border-[#E4D804] text-white place-self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className='bg-white py-5 px-10 rounded-lg'>
                    <h1 className='text-black'>
                        <form onSubmit={handleBooking}>
                            <div>
                                <div className='max-w-screen-xl mx-auto md:flex justify-center items-center'>
                                    <div className='flex justify-center'>
                                        <img className='w-80' src={BookMovie?.show?.image?.original} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='md:grid grid-cols-2 gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Mobile</span>
                                    </label>
                                    <input type="text" name='mobile' placeholder="mobile" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name='date' className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#E3D804]"><input type="submit" value="Login" /></button>
                            </div>
                        </form>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;