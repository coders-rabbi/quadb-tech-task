import live_img from '../../../assets/friendFamily/live_img.png'
import './MiddleBanner.css'

const MiddleBanner = () => {
    return (
        <div className='middleBanner-bg '>
            <div className='md:grid grid-cols-2 max-w-screen-xl mx-auto'>
                <div>
                    <p className='text-xl uppercase'>online streaming</p>
                    <h2>Live Movie & TV Shows For Friends & Family</h2>
                    <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>
                    <div>
                        <h1>HD 4K</h1>
                        <div>
                            <h2>20K+</h2>
                            <p>Active Customer</p>
                        </div>
                    </div>
                    <button></button>
                </div>
                <div>
                    <img src={live_img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MiddleBanner;