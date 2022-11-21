import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Navbar from './Pages/Shared/Navbar';
import SignUp from './Pages/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard';
import MyAppointments from './Pages/MyAppointments';
import MyReview from './Pages/MyReview';
import MyHistory from './Pages/MyHistory';
import Users from './Pages/Users';
import RequireAdmin from './Pages/Login/RequreAdmin';
import AddDoctor from './Pages/AddDoctor';
import ManageDoctors from './Pages/ManageDoctors';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        } />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin>
            <AddDoctor></AddDoctor>
          </RequireAdmin>}></Route>
          <Route path='manageDoctors' element={<RequireAdmin>
            <ManageDoctors></ManageDoctors>
          </RequireAdmin>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<SignUp></SignUp>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
