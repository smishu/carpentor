
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

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
import AdminPanle from './Pages/Dashboard/AdminPanle';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import AddProduc from './Pages/Dashboard/AddProduc';
import AddAReview from './Pages/Dashboard/AddAReview';
import Reviews from './Pages/Home/Reviews';
import Navbar from './Pages/Shared/Navbar';




function App() {
  return (
    <div>


      <Navbar></Navbar>

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
          <Route path='review' element={<AddAReview></AddAReview>}></Route>

          <Route path='admin' element={
            <RequireAdmin>
              <AdminPanle></AdminPanle>
            </RequireAdmin>}></Route>
          <Route path='addProduct' element={
            <RequireAdmin>
              <AddProduc></AddProduc>
            </RequireAdmin>}></Route>
        </Route>

        <Route path='/paceloder' element={<PacelOrder></PacelOrder>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
