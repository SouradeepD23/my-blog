import './Navbar';
import Navbar from './Navbar';
import Home from './Home';
// import Example from './Example';
// import EventHandling from './EventHandling';
import States from './States';
import ListOutput from './ListOutput';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home />
        {/* <ListOutput></ListOutput> */}
      </div>
      {/* <Example></Example> */}
      {/* <EventHandling></EventHandling> */}
      {/* <States></States> */}
    </div>
  );
}

export default App;
