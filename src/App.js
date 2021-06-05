import './App.css';
import './Navbar';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = 'Welcome to the new blog';
  // var likes = 200;
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
