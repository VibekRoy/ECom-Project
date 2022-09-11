//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Create from './Create';
import Slide from './Slide';
import Coupon from './Coupon';
function App() {
  return (
    <div className="App">
      <Header />
      <Slide />
      <h1 className='toppics'>Top Picks For You</h1>
      <Create />
      <Coupon />
      <a href='/Admin'>Admin</a>
    </div>

  );
}

export default App;
