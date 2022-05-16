import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FoodDetails from './components/FoodDetails/FoodDetails';
import AuthProvider from './components/Context/AuthProvider';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route path='home' element={<Home></Home>}></Route>
            <Route path='details/:foodId' element={<FoodDetails></FoodDetails>}></Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='signup' element={<SignUp />} />
            <Route path='cart' element={<Cart></Cart>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
