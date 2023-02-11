import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Character from './pages/Character';
import Location from './pages/Location';
import Episode from './pages/Episode';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Character />} />
        <Route path="/location" element={<Location />} />
        <Route path="/episode" element={<Episode />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
