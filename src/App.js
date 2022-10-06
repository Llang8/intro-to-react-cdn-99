import CounterView from "./views/Counter";
import Students from "./views/Students";
import Pokedex from "./views/Pokedex";
import Home from "./views/Home";
import PostSingle from "./views/PostSingle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthContext } from './contexts/AuthProvider';
import { useContext } from 'react';

function App() {
    const { login, logout } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/students">Students</Link>
                        <Link className="nav-link" to="/counter">Counter</Link>
                        <Link className="nav-link" to="/pokedex">Pokedex</Link>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <button onClick={login} className="btn btn-primary">Login</button>
                        <button onClick={logout} className="btn btn-primary">Logout</button>
                    </div>
                </div>
            </nav>
            <div className="container">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/post">
                      <Route path=":id" element={<PostSingle />} />
                  </Route>
                  <Route path="/students" element={<Students />} />
                  <Route path="/counter" element={<CounterView />} />
                  <Route path="/pokedex" element={<Pokedex />} />
              </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
