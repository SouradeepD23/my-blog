import './Navbar';
import Navbar from './Navbar';
import Home from './Home';
// import Example from './Example';
// import EventHandling from './EventHandling';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home />
      </div>
      {/* <Example></Example> */}
      {/* <EventHandling></EventHandling> */}
    </div>
  );
}

export default App;
