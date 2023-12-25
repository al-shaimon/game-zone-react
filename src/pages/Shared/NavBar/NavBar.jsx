import logo from '../../../assets/Frame.png';
import { FaYoutube, FaTiktok } from 'react-icons/fa6';

const NavBar = () => {
  return (
    <nav className='border-2 border-red-600'>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between mt-8">
        <div className="flex gap-4 justify-center">
          <img className='w-20 h-10' src={logo} alt="" />
          <h3 className="font-bold text-4xl">
            <span className="text-primary">G</span>amer
          </h3>
        </div>
        <div className="inline-flex items-center justify-center mt-8 md:mt-0">
          <div className="bg-[#0b02231a] inline-flex items-center justify-center gap-2 w-56 h-12 rounded-lg">
            <p className="text-lg font-medium pr-1">Follow Us On</p>
            <a href="#">
              <FaYoutube className="text-red-600 text-2xl mt-1"></FaYoutube>
            </a>
            <a href="#">
              <FaTiktok className=" text-2xl "></FaTiktok>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
