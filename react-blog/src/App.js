import Navbar from './Navbar';
import Home from './Home';


function App() {



  return (
    <div className="App">
      <Navbar />
      <div className="content">

        <Home />


      </div>

    </div>
  );
}

//at the end we always export the component function , so that we can use it elsewhere as well.
export default App;
