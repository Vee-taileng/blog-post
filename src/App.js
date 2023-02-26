import Home from './Home';
import Navbar from './Navbar';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Products />
      </div>
    </div>
  );
}

export default App;
