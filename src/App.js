import logo from './assets/Main Page/logo.svg';
import './App.css';
import Buttons345x64 from './components/Buttons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Buttons345x64 className="Login">Login</Buttons345x64>
        <Buttons345x64 className="Create_account">Create Account</Buttons345x64> */}
        <div>
          <button className='Login'>Login</button>
          <button className='Create_account'>Create Account</button>
        </div>
      </header>
    </div>
  );
}

export default App;
