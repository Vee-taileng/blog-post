import Blogs from './Blogs';
import Home from './Home';
import Navbar from './Navbar';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <Products /> */}
        <Blogs/>
      </div>
    </div>
  );
}

export default App;
