import resulation from '../../assets/services_img.jpg'
import { FaTv, FaVideo } from "react-icons/fa";

const OurServies = () => {
    return (
        <div className='max-w-screen-xl mx-auto md:grid grid-cols-2 justify-items-center-center items-center gap-x-2 mt-20 mb-20'>
            <div className='flex justify-center'>
                <img className='w-[550] h-[550]' src={resulation} alt="" />
            </div>
            <div className='text-white p-12 md:p-0'>
                <p className='text-[#E4D804] text-xl font-bold uppercase mb-4'>--- Bangladesh</p>
                <h2 className='text-5xl font-bold mb-8'>Download Your Shows Watch Offline.</h2>
                <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.</p>
                <div>
                    <div className='w-20 h-20 flex justify-center items-center border-dotted border-[#E4D804] border-2 rounded-full mt-5 mb-5'>
                        <FaTv className='text-4xl' />
                    </div>
                    <div>
                        <h3>Enjoy on Your Tve.</h3>
                        <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
                <div>
                    <div className='w-20 h-20 flex justify-center items-center border-dotted border-[#E4D804] border-2 rounded-full mt-5 mb-5'>
                        <FaVideo className='text-4xl' />
                    </div>
                    <div>
                        <h3>Enjoy on Your Tve.</h3>
                        <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServies;