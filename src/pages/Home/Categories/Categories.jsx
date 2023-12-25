import cat1 from '../../../assets/Rectangle 11.png';
import cat2 from '../../../assets/Rectangle 12.png';
import cat3 from '../../../assets/Rectangle 13.png';
import cat4 from '../../../assets/Rectangle 14.png';
import cat5 from '../../../assets/Rectangle 15.png';
import cat6 from '../../../assets/Rectangle 16.png';
import cat7 from '../../../assets/Rectangle 17.png';
import cat8 from '../../../assets/Rectangle 18.png';
import cat9 from '../../../assets/Rectangle 19.png';

const Categories = () => {
  return (
    <>
      <div className="my-20 pr-14 pl-11">
        <div className="grid grid-cols-2 gap-16 text-center md:grid-cols-3 md:gap-10 md:px-10">
          <div className="flex justify-center items-center gap-3">
            <img src={cat1} alt="cat1" />
            <a className="text-lg font-semibold" href="#">
              Action Games
            </a>
          </div>
          <div className="flex justify-center items-center gap-3">
            <img src={cat2} alt="cat2" />
            <a className="text-lg font-semibold" href="#">
              Adventure Games
            </a>
          </div>
          <div className="flex justify-center items-center gap-3">
            <img src={cat3} alt="cat3" />
            <a className="text-lg font-semibold" href="#">
              Arcade Games
            </a>
          </div>
          <div className="flex justify-center items-center gap-3">
            <img src={cat4} alt="cat4" />
            <a className="text-lg font-semibold" href="#">
              Educational Games
            </a>
          </div>
          <div className="flex justify-center items-center gap-3">
            <img src={cat5} alt="cat5" />
            <a className="text-lg font-semibold" href="#">
              Word Games
            </a>
          </div>
          <div className="flex justify-center items-center gap-3">
            <img src={cat6} alt="cat6" />
            <a className="text-lg font-semibold" href="#">
              Role Plying Games
            </a>
          </div>
          <div className="flex justify-center items-center gap-3">
            <img src={cat7} alt="cat7" />
            <a className="text-lg font-semibold" href="#">
              Music & Audio Games
            </a>
          </div>
          <div className="flex justify-center items-center gap-3">
            <img src={cat8} alt="cat8" />
            <a className="text-lg font-semibold" href="#">
              Puzzle Games
            </a>
          </div>
          <div className="flex justify-center items-center gap-3">
            <img src={cat9} alt="cat9" />
            <a className="text-lg font-semibold" href="#">
              Strategy Games
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
