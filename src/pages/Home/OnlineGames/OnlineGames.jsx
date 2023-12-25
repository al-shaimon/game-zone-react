import game1 from '../../../assets/Rectangle 4.png';
import game2 from '../../../assets/Rectangle 5.png';
import game3 from '../../../assets/Rectangle 6.png';
import game4 from '../../../assets/Rectangle 7.png';

const OnlineGames = () => {
  return (
    <>
      <div className="mt-14">
        <h3 className="text-center text-3xl font-bold">
          Online Games{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
            Funny Videos
          </span>
        </h3>
        <p className="text-[#534C64] text-sm text-center px-10 mt-3">
          A Collection of Hilarious Videos to Brighten Your Day
        </p>
      </div>

      <div className="md:grid md:grid-cols-4 md:gap-5 md:mt-14">
        <div className="mt-14 md:mt-0">
          <div className="flex justify-center items-center">
            <img className="" src={game1} alt="game1" />
          </div>
          <p className="text-[#534C64] text-center px-10 my-8">
            No Download. No Installs. Play games Instantly on Gamer.
          </p>
        </div>
        <div className="">
          <div className="flex justify-center items-center">
            <img className="" src={game2} alt="game2" />
          </div>
          <p className="text-[#534C64] text-center px-10 my-8">
            Did you score? #unblockedgames #school
          </p>
        </div>
        <div className="">
          <div className="flex justify-center items-center">
            <img className="" src={game4} alt="game4" />
          </div>
          <p className="text-[#534C64] text-center px-10 my-8">Breaking game records like OG</p>
        </div>
        <div className="">
          <div className="flex justify-center items-center">
            <img className="" src={game3} alt="game3" />
          </div>
          <p className="text-[#534C64] text-center px-10 my-8">
            Busted gaming on school laptop, but you are still lit.
          </p>
        </div>
      </div>
    </>
  );
};

export default OnlineGames;
