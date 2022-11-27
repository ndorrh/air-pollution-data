import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Details from './Components/Pages/Details';
import Contact from './Components/Pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="air-pollution-data/"
          element={<Navigate to="/" />}
        />
        <Route path="/:country" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
