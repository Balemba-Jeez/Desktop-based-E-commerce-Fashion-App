import googlelogo from '../src/Assets/googlelogo.png'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AuthButton from './Component/User/AuthButton';
import InputField from './Component/User/InputField';
import SubmitButton from './Component/User/SubmitButton';
import SignupPage from './Pages/User/SignupPage';
import LoginPage from './Pages/User/LoginPage';
const router = createBrowserRouter([
  {
    path: '/user/signup',
    element: <SignupPage />
  
  },
  {
    path: '/user/login',
    element: <LoginPage />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
