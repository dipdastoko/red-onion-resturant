import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FoodDetails from './components/FoodDetails/FoodDetails';
import AuthProvider from './components/Context/AuthProvider';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/details/:foodId' element={<FoodDetails></FoodDetails>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
