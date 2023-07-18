import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-light my-3"
      data-bs-theme="light"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Tic Tac Toe
        </a>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/games/create">
                Start New Game
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
