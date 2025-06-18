// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Home from './Home';
// import StaffPage from './StaffPage';
// import Login from './Login';
// import Navbar from './Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import GateKeeper from './GateKeeper';
// import TruckTransaction from './TruckTransaction';
// import PlantMaster from './PlantMaster';
// import Reports from './Report';



// function Layout() {
//   const location = useLocation();
//   const hideNavbar = location.pathname === '/'; // Hide only on login

//   return (
//     <>
//       {!hideNavbar && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/staff" element={<StaffPage />} />
//         <Route path="/gate" element={<GateKeeper />} />
//          <Route path="/truck" element={<TruckTransaction />} />
//          <Route path="/plantmaster" element={<PlantMaster />} />
//          <Route path="/reports" element={<Reports />} />
//       </Routes>
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Layout />
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import StaffPage from './StaffPage';
import Login from './Login';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import GateKeeper from './GateKeeper';
import TruckTransaction from './TruckTransaction';
import PlantMaster from './PlantMaster';
import Report from './Report';
import PrivateRoute from './components/PrivateRoute'; // ✅ Import this

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        {/* 🔐 Public */}
        <Route path="/" element={<Login />} />

        {/* 🔒 Protected Routes */}
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/staff" element={<PrivateRoute><StaffPage /></PrivateRoute>} />
        <Route path="/gate" element={<PrivateRoute><GateKeeper /></PrivateRoute>} />
        <Route path="/truck" element={<PrivateRoute><TruckTransaction /></PrivateRoute>} />
        <Route path="/plantmaster" element={<PrivateRoute><PlantMaster /></PrivateRoute>} />
        <Route path="/reports" element={<PrivateRoute><Report /></PrivateRoute>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
