import { HashRouter, Route, Routes } from 'react-router';
import { MainLayout } from './layout/MainLayout';
import { ProfilePage } from './pages/ProfilePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { PortfolioPage } from './pages/PortfolioPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ProfilePage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}