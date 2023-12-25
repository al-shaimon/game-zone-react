import {
  FaApple,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import logo from '../../../assets/Frame.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-[#0B0223] pt-10 md:pt-20">
      <div className="flex gap-4 justify-center">
        <img className="w-20 h-10" src={logo} alt="logo" />
        <h3 className="font-bold text-4xl text-white">
          <span className="text-primary">G</span>amer
        </h3>
      </div>

      <div className="text-white grid grid-cols-3 gap-2 px-8 text-center pt-8 md:flex md:gap-12 md:justify-center md:pt-10">
        <a href="#">Our Story</a>
        <a href="#">Games</a>
        <a href="#">Web Games</a>
        <a href="#">Careers</a>
        <a href="#">Support</a>
        <a href="#">My Account</a>
      </div>

      <div className="text-white grid grid-cols-3 gap-4 text-center text-2xl pl-14 pt-8 md:flex md:justify-center md:gap-6 md:pt-10">
        <a href="#">
          <FaXTwitter></FaXTwitter>
        </a>
        <a href="#">
          <FaFacebook></FaFacebook>
        </a>
        <a href="#">
          <FaYoutube></FaYoutube>
        </a>
        <a href="#">
          <FaLinkedin></FaLinkedin>
        </a>
        <a href="#">
          <FaInstagram></FaInstagram>
        </a>
        <a href="#">
          <FaApple></FaApple>
        </a>
      </div>

      <div className="text-white grid grid-cols-2 gap-2 text-xs text-center pt-8 px-8 md:flex md:justify-center md:gap-6 md:pt-10">
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Privacy Settings</a>
      </div>

      <div className="text-xs text-white text-center pt-5 md:py-7">
        <p>
          Play Games @<a href="#">Gamer</a>
        </p>
        <p className="py-2">Copyright ©{currentYear} Gamer Bangladesh</p>
      </div>
    </footer>
  );
};

export default Footer;
