
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Profile from './Pages/Profile/Profile';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Products from './Pages/Home/Products';
import Blog from './Pages/Blog';
import RequireAuth from './Pages/Shared/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import PacelOrder from './Pages/Oders/PacelOrder';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyItems from './Pages/Dashboard/MyItems';
import Review from './Pages/Dashboard/Review';




function App() {
  return (
    <div>




      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>

        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>

        }>
          <Route index element={<MyItems></MyItems>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
        </Route>

        <Route path='/paceloder' element={<PacelOrder></PacelOrder>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
