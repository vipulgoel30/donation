import { Link ,Routes,Route} from "react-router-dom";
import { Suspense,lazy } from "react";
// Imports
const Allngo=lazy(()=>import('./components/Ngo/Allngo') );

function App() {
  return (
    // <Allngo/>
  <Routes>
    <Route to="" element={<Allngo/>}/>
  </Routes>
  );
}

export default App;
