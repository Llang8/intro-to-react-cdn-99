import CounterView from './views/Counter';
import Students from './views/Students';
import Pokedex from './views/Pokedex';
import Home from './views/Home';
import PostSingle from './views/PostSingle';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/pokedex">Pokedex</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post">
          <Route path=":id" element={<PostSingle />} />
        </Route>
        <Route path="/students" element={<Students />} />
        <Route path="/counter" element={<CounterView />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
