import { FaRegPlayCircle } from 'react-icons/fa';
import { RiGroupLine } from 'react-icons/ri';
import { FiDownload } from 'react-icons/fi';
import banner from '../../../assets/Group 18.png';
import bg from '../../../assets/Group 14.png';

const Banner = () => {
  return (
    <>
      <div className="md:flex md:flex-row-reverse md:justify-between my-10">
        <div className="md:max-h-[250px] md:max-w-[550px]">
          <img src={banner} alt="" />
        </div>

        <div
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <div className="flex flex-col justify-center items-center px-12 pt-7 md:items-start md:justify-start md:px-0 md:pt-32">
            <div className="uppercase">
              <h3 className="text-4xl font-semibold">Play like the</h3>
              <p className="text-7xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                G.O.A.T.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <FaRegPlayCircle className="text-primary" />
                <p>1-Click instant play</p>
              </div>
              <div className="flex gap-2 items-center">
                <FiDownload className="text-primary" />
                <p>No Download</p>
              </div>
              <div className="flex gap-2 items-center">
                <RiGroupLine className="text-" />
                <p>1000s of supported online games</p>
              </div>
            </div>

            <div className="pt-7">
              <button className="bg-primary text-white font-semibold rounded-full w-28 h-12 mr-2 uppercase">
                Sign In
              </button>
              <button className="bg-[#4EC5F7] text-white font-semibold rounded-full w-28 h-12 ml-2 uppercase">
                Go Rogue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
