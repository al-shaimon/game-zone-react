import './App.css';
import Banner from './pages/Home/Banner/Banner';
import Community from './pages/Home/Community/Community';
import Footer from './pages/Shared/Footer/Footer';
import NavBar from './pages/Shared/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Community />
      <Footer />
    </>
  );
}

export default App;
