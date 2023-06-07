import live_img from '../../../assets/friendFamily/live_img.png'
import './MiddleBanner.css'

const MiddleBanner = () => {
    return (
        <div className='middleBanner-bg py-28'>
            <div className='md:grid grid-cols-2 max-w-screen-xl mx-auto items-center'>
                <div className='w-8/12'>
                    <p className='font-bold uppercase mb-4'>online streaming</p>
                    <h2 className='text-4xl font-bold mb-8'>Live Movie & TV Shows For Friends & Family</h2>
                    <p className='font-semibold'>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>
                    <div className='flex justify-between'>
                        <h1 className='text-5xl font-bold'>HD 4K</h1>
                        <div>
                            <h2 className='text-4xl font-bold'>20K+</h2>
                            <p className='text-2xl font-bold'>Active Customer</p>
                        </div>
                    </div>
                    <div className='mt-7 flex justify-center'>
                        <button className="btn btn-wide bg-[#E3D804]">Wide</button>
                    </div>
                </div>
                <div>
                    <img src={live_img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MiddleBanner;