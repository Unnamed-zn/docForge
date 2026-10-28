import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/global.css';
import { ProjectFolderSelector } from './pages/folderSelectorPage';
import { Home } from './pages/home';
import { Pages } from './pages/pages';
import { Theme } from './pages/theme';
import { Assets } from './pages/assets';
import { Output } from './pages/output';
import { Config } from './pages/config';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectFolderSelector />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/output" element={<Output />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App