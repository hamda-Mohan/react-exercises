import React from 'react'
import { Outlet } from 'react-router';

import Nav from './Components/Nav';

const App = () => {
  return (
    <div>
      <Nav/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
