import {Link,Routes,Route} from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Errors from './Components/Errors';
import Home from './Components/Home';
import ResourceCollection from './Components/ResourceCollection';
import UserActions from './Components/UserActions'

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/useractions">User Actions</Link>
        <Link className='nav-link' to="/error">Error</Link>
        <Link className='nav-link' to="/resourcecollections">Resource Collections</Link>
        <Link className='nav-link' to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useractions" element={<UserActions />} />
        <Route path="/resourcecollections" element={<ResourceCollection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Errors />} />
      </Routes>
    </div>
  );
}

export default App;
