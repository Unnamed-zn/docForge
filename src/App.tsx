import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home, Pages, Theme, Assets, Output, Config, ProjectFolderSelector } from './pages';
import './style/global.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProjectFolderSelector />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/output" element={<Output />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </HashRouter>
  );
}

export default App