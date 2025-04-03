import { FaFacebook, FaTwitter, FaLinkedin, FaGlobe, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-green-950 text-gray-300 pt-10 pb-4">
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between items-start px-6">
        <div className='w-full md:w-[30%] mb-6 md:mb-0 pr-8 '>
          <h2 className="text-4xl font-bold text-lime-300 mb-4">Grevion</h2>
          <p className="text-gray-400 text-[1rem] pb-4">
            Grevion is a revolutionary platform that bridges the gap between SPOCs and power plants, offering a streamlined and efficient way to buy and sell paralis.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="w-6 h-6 hover:text-lime-300 cursor-pointer" />
            <FaTwitter className="w-6 h-6 hover:text-lime-300 cursor-pointer" />
            <FaLinkedin className="w-6 h-6 hover:text-lime-300 cursor-pointer" />
            <FaGlobe className="w-6 h-6 hover:text-lime-300 cursor-pointer" />
          </div>
        </div>

        <div className="w-full md:w-[20%] mb-6 md:mb-0">
          <h3 className="text-[1.1rem] font-semibold mb-4">LINKS</h3>
          <ul className="space-y-3">
            <Link to="/about-us" className="block hover:text-gray-300">About</Link>
            <Link to="/our-sevices" className="block hover:text-gray-300">Services</Link>
            <Link to="/blog" className="block hover:text-gray-300">Blog</Link>
            <Link to="/contact-us" className="block hover:text-gray-300">Contact</Link>
          </ul>
        </div>

        <div className="w-full md:w-[25%] mb-6 md:mb-0">
          <h3 className="text-[1.1rem] font-semibold mb-4">INFO</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 text-lime-300"><FaMapMarkerAlt /> <span className='text-gray-300'>123 Energy Way, Green City</span></li>
            <li className="flex items-center space-x-2 text-lime-300"><FaPhone /> <span className='text-gray-300 cursor-pointer'>+1 (800) 123-4567</span></li>
            <li className="flex items-center space-x-2 text-lime-300"><FaEnvelope /> <span className='text-gray-300 cursor-pointer'>support@grevion.com</span></li>
          </ul>
        </div>

        <div className="w-full md:w-[25%]">
          <h3 className="text-xl font-semibold">NEWSLETTER</h3>
          <p className="mt-2 text-gray-400 text-[1rem] pb-4">Sign up to get updates and news.</p>
          <div className="flex flex-col">
            <input type="text" placeholder="Email Address" className="py-2 px-4 mb-2 bg-[#0e362d] text-gray-100 focus:outline-none focus:ring-2 focus:ring-lime-400 rounded-full" />
            <button className="bg-lime-300 text-gray-900 px-4 py-2 rounded-full font-medium shadow-lg hover:font-semibold hover:bg-lime-400">Subscribe Now</button>
          </div>
        </div>
      </div>
      <hr className='mt-10 text-green-900 opacity-20 mx-6' />
      <div className="text-center mt-4 text-gray-500">© 2025 Grevion. All Rights Reserved.</div>
    </footer>
  );
}
