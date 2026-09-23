
import {  Outlet} from "react-router";
import Nav from "./Components/Nav";


const App = () => {
  

  return (
    <div>
      <Nav/>
      <main>
        <Outlet />
      </main>
      {/* outlet waa placeholderka pageka markas la joogo
       */}
      {/* marka aad rabtid ina ogatid pageka aad hada joogtid wa ina isticmasha NavLink */}
    </div>
  );
};

export default App;
