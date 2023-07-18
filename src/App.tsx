import { Routes, Route } from 'react-router-dom';
import NoMatch from './views/no-match';
import Layout from './components/layout';
import Home from './views/home';
import CreateGame from './views/create-game';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/games/create" element={<CreateGame />} />
            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
