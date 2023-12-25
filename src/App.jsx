import './App.css';
import Banner from './pages/Home/Banner/Banner';
import Community from './pages/Home/Community/Community';
import OnlineGames from './pages/Home/OnlineGames/OnlineGames';
import PlayInstantly from './pages/Home/PlayInstantly/PlayInstantly';
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
      <Footer />
    </>
  );
}

export default App;
