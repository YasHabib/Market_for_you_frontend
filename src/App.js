import logo from './assets/Main Page/logo.svg';
import './App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import RegistrationInputsPage1 from './components/RegistrationInputs';
import LoginWindow from './components/LoginWindow';

function App() {
  return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        
        <div>
          <Popup className='Login-window' trigger={<button className='Login'>Login</button>} position = "center center">
            <text style={{
              color: "#9349DE"
            }}>Welcome Back!</text>
            <br></br>
            <LoginWindow></LoginWindow>
            <button>Login</button>
          </Popup>

          <Popup className='Register-window' trigger={<button className='Create_account'>Create Account</button>} position="center center">
            <text style={{
              color: "#9349DE"
            }}>Welcome Back!</text>
            <br></br>
            <RegistrationInputsPage1></RegistrationInputsPage1>
            <button>Next</button>
          </Popup>
        </div>
      </header>
     </div>
  );
}

export default App;
