import { Link ,Routes,Route} from "react-router-dom";
import { Suspense,lazy } from "react";
import ContextProvider from "./context/ContextProvider";
// Imports
const Allngo=lazy(()=>import('./components/Ngo/Allngo') );

function App() {
  return (
    <ContextProvider>
      <Allngo/>
  <Routes>
    <Route to="/ngos" element={<Allngo/>}/>
  </Routes>
  </ContextProvider>
  );
}

export default App;
