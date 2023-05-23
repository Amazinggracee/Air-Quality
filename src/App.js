import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Nav';
import AirDetail from './components/AirDetail';
import PageNotFound from './pages/PageNotFound';
import logoIcon from './assets/logoIcon.png';
import Air from './pages/Air';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img className="logo-image" src={logoIcon} alt="logo" />
          <h1 className="logo-heading">AIR QUALITY</h1>
        </div>
        <nav>
          <Link className="home" to="/">
            Home
          </Link>
        </nav>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/AirDetail" element={<AirDetail />} />
        <Route path="/Air" element={<Air />} />
        <Route path="/PageNotFound" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
