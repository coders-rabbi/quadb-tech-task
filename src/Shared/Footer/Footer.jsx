import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import './Footer.css';
import { FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer-bg mx-auto text-center py-8'>
            <div className='max-w-screen-xl mx-auto md:flex justify-between py-10 border-b-4 border-indigo-500'>
                <div className="flex justify-center mb-4 md:mb-0">
                    <img className="text-white" src={logo} alt="" />
                </div>
                <div className="mb-4 md:mb-0">
                    <ul className="text-white text-xl md:flex justify-center gap-10">
                        <li><Link>Home</Link></li>
                        <li><Link>Movie</Link></li>
                        <li><Link>Pricing</Link></li>
                    </ul>
                </div>
                <div>
                    <input type="email" name="" id="" placeholder="Email" className="px-4 py-3 rounded-l-lg" />
                    <input type="submit" value="Subcribe" className="text-black font-bold bg-[#E3D804] py-3 px-5 rounded-r-lg" />
                </div>
            </div>
            <div className="text-5xl flex gap-10 justify-center mt-10 ">
                <p><FaFacebook className="text-[#E4D804]" /></p>
                <p><FaLinkedin className="text-[#E4D804]" /></p>
                <p><FaYoutube className="text-[#E4D804]" /></p>
            </div>
            <div className="text-white mt-6 text-xl">
                <p>Copyright © 2023 - All right reserved by QuadB Movie</p>
            </div>
        </div>
    );
};

export default Footer;