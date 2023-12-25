import './App.css';
import Banner from './pages/Home/Banner/Banner';
import Careers from './pages/Home/Careers/Careers';
import Categories from './pages/Home/Categories/Categories';
import Community from './pages/Home/Community/Community';
import OnlineGames from './pages/Home/OnlineGames/OnlineGames';
import PlayInstantly from './pages/Home/PlayInstantly/PlayInstantly';
import PlayOnline from './pages/Home/PlayOnline/PlayOnline';
import Footer from './pages/Shared/Footer/Footer';
import NavBar from './pages/Shared/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Community />
      <OnlineGames />
      <PlayInstantly />
      <PlayOnline />
      <Careers />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
