import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newsLetter-bg mt-20'>
            <div className='max-w-screen-xl mx-auto md:flex justify-between py-14'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>TRIAL START FIRST 30 DAYS.</h1>
                    <p className='font-semibold'>Enter your email to create or restart your membership.</p>
                </div>
                <div className='bg-white flex mx-auto p-1 rounded-md'>
                    <input type="email" name="" id="" placeholder="Email" className="px-4 py-3 rounded-l-lg" />
                    <input type="submit" value="Subcribe" className="text-[#E3D804] font-bold bg-black py-3 px-5 rounded-r-lg" />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;