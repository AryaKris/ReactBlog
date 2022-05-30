import Navbar from './Navbar';
import Home from './Home';
import './App.css';

function App() {



  return (
    <div className="App">
      <Navbar />
      <div ClassName="content">

        <Home />


      </div>

    </div>
  );
}

//at the end we always export the component function , so that we can use it elsewhere as well.
export default App;
