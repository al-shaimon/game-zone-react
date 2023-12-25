import career from '../../../assets/Group 65.png';

const Careers = () => {
  return (
    <>
      <div className="text-white bg-primary mt-20 pb-16 p-5 md:flex">
        <div className="md:px-20">
          <h3 className="text-3xl font-bold pb-5 pt-8">Careers</h3>
          <p className="text-sm pb-10 md:w-5/6">
            Gamer is driven to create the best and most fun games for our millions of players all
            around the world, and we,re always on the lookout for more top talent to join our
            growing team. If you,d like to help us make great games and be a part of Gamers bright
            future, we,d love to hear from you.
          </p>

          <div className="grid grid-cols-2 gap-5 text-sm">
            <div>
              Multimedia Artist +<br /> Data Engineer + <br />
              Adroid Engineer +<br /> Server Developer + <br />
              Group Financial Accountant + <br />
              Senior User Acuisition Specialist +
            </div>
            <div>
              Lisbon, Portugal <br />
              Lisbon, Portugal <br />
              Zoetermeer, Netherlands <br />
              Lisbon, Portugal <br />
              London, United Kingdom <br />
              Lisbon, Portugal
            </div>
          </div>
          <div className="mt-14">
            <button className="bg-white text-primary font-semibold rounded-full w-48 h-12 mr-2 uppercase">
              See All Positions
            </button>
          </div>
        </div>
        <div className="mt-10">
          <img className="md:w-screen" src={career} alt="" />
        </div>
      </div>
    </>
  );
};

export default Careers;
