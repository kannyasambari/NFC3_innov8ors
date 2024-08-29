import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PetDetailPage from './pages/PetDetailPage';
import AdoptionForm from './pages/AdoptionForm';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pet/:id" element={<PetDetailPage />} />
        <Route path="/adopt" element={<AdoptionForm />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
