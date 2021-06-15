import './Navbar';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
// import Example from './Example';
// import EventHandling from './EventHandling';
// import States from './States';
// import ListOutput from './ListOutput';
// import UseEffect from './UseEffect';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewBlog from './NewBlog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <NewBlog />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {/* <ListOutput></ListOutput> */}
        {/* <UseEffect></UseEffect> */}
      </div>
      {/* <Example></Example> */}
      {/* <EventHandling></EventHandling> */}
      {/* <States></States> */}
      </div>
    </Router>
  );
}

export default App;
