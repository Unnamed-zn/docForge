import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/global.css';
import { ProjectFolderSelector } from './pages/folderSelectorPage';
import { Home } from './pages/home';
import { Pages } from './pages/pages';
import { Patterns } from './pages/patterns';
import { Assets } from './pages/assets';
import { Output } from './pages/output';
import { Config } from './pages/config';
import { NotFound } from './pages/notFound';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectFolderSelector />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/patterns" element={<Patterns />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/output" element={<Output />} />
        <Route path="/config" element={<Config />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App