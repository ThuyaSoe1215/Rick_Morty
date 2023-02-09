import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Character from './components/Character';
import Location from './components/Location';
import Episode from './components/Episode';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/character" element={<Character />} />
        <Route path="/location" element={<Location />} />
        <Route path="/episode" element={<Episode />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
