import { NavLink, Route, Routes } from 'react-router-dom';
import './App.scss';
import PageWelcome from './components/PageWelcome';
import PageUseToggle from './components/PageUseToggle';
import PageUseFetch from './components/PageUseFetch';

function App() {
  return (
    <div>
      <h1>Custom Hooks Site</h1>

      <nav>
        <NavLink to="/welcome">Welcome</NavLink>
        <NavLink to="/useToggle">useToggle</NavLink>
        <NavLink to="/useFetch">useFetch</NavLink>
      </nav>

      <Routes>
        <Route path="/welcome" element={<PageWelcome />} />
        <Route path="/useToggle" element={<PageUseToggle />} />
        <Route path="/useFetch" element={<PageUseFetch />} />
      </Routes>
    </div>
  );
}

export default App;
