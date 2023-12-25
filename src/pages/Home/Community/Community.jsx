import community from '../../../assets/pngwing 4.png';

const Community = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between md:mt-48">
        <div>
          <img src={community} alt="community" />
        </div>
        <div className="text-center md:text-end">
          <h3 className="text-3xl md:pt-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary py-4">
            We are gamer
          </h3>
          <p className="text-[#534C64] px-2 md:px-0 md:w-96">
            An international digital games and entertainment company. We develop, publish and
            distribute multiplayer mobile games. We reach over 400 million players each month and
            our audience keeps growing.
          </p>
          <button className="bg-primary text-white font-semibold rounded-full w-40 h-12 mt-8 uppercase">
            Know More
          </button>
          <p className="text-[#534C64] text-lg mt-5 ">Our Purpose...</p>
          <p className="text-[#534C64] text-xl font-bold ">“unleash the gamer in everyone”</p>
        </div>
      </div>
    </>
  );
};

export default Community;
