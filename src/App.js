import { Link, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import ContextProvider from "./context/ContextProvider";
import Landing from "./components/Landing";
import 'react-toastify/dist/ReactToastify.css';
// Imports
const Allngo = lazy(() => import('./components/Ngo/Allngo'));
const MakeDonation = lazy(() => import('./components/User/MakeDonations'));

function App() {
  return (
    <ContextProvider>
      {/* <ToastContainer /> */}
        <Allngo />
        <Landing />
        <MakeDonation />
        <Routes>
          {/* <Route to="/ngos" element={<Allngo/>}/> */}
        </Routes>
    </ContextProvider>
  );
}

export default App;
