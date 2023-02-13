import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='box-one'>
        <h1>Hello Navbar</h1>
      </div>
      <div className='box-two'>
        <h1>Hello Header</h1>
      </div>
      <div className='box-three m-top'>
        <div className='img-container'><img src='https://picsum.photos/400/300' alt='lorem' /></div>
        <h1>Hello Content</h1>
      </div>
      <div className='box-four'>
        <h1>Hello Footer</h1>
      </div>
    </div>
  );
}

export default App;
