import logo1 from '../../../assets/Rectangle 67.png';
import logo2 from '../../../assets/Rectangle 78.png';

const PlayOnline = () => {
  return (
    <>
      <div className="text-center mt-20 md:flex md:flex-row-reverse">
        <div className="md:mt-16 md:flex md:flex-col md:justify-center">
          <h3 className="text-3xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
              Play Games Online
            </span>
            <br />
            Anywhere, Anytime! .
          </h3>
          <p className="text-[#534C64] text-sm text-balance text-center px-5 my-10 md:px-40">
            PC. dad’s phone, mom’s tablet, or your Chromebook, with Gamer you can play your favorite
            games online for free, any time, anywhere , on any device.
          </p>
        </div>
        <div className="relative px-10 md:ml-20">
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

export default PlayOnline;
