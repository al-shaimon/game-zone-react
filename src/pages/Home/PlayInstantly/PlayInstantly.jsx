import logo1 from '../../../assets/Rectangle 55.png';
import logo2 from '../../../assets/Rectangle 66.png';

const PlayInstantly = () => {
  return (
    <>
      <div className="text-center mt-20 md:flex">
        <div className="md:mt-16 md:flex md:flex-col md:justify-center">
          <h3 className="text-3xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
              Play Instantly,
            </span>
            <br />
            No Downloads <br />
            No Installs.
          </h3>
          <p className="text-[#534C64] text-sm text-balance text-center px-5 my-10 md:px-40">
            Play games online for free without  downloading. Just click the Play button and
            play instantly in your browser.
          </p>
        </div>
        <div className="relative px-5">
          <img className="w-full" src={logo1} alt="" />
          <img
            className="absolute -bottom-10 left-0 w-24 md:w-36 lg:w-48 md:-ml-20"
            src={logo2}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default PlayInstantly;
