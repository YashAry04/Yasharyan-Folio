import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import Archive from './components/Archive';
import CertArchive from './components/CertArchive';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/cert-archive" element={<CertArchive />} />
        <Route path="/contact-form" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
