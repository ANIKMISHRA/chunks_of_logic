import './App.css';
import LoginForm from './login_form/Login';
import Form from './login_signup_form/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './slider/Slider';
import Login1 from './login_form_2';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FacebookLoginComponent from './react-facebook-login';
import ReactGoogleLogin from './react-google-login';


function App() {
  return (
    <div>
      <ReactGoogleLogin />
    </div>
  );
}

export default App;
