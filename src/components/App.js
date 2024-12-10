
import {Routes , Route  } from "react-router"; 
import Account from "./Account";
import ViewAccounts from "./ViewAccounts"
import Navigation from "./Navigation";
import Home from "./Home";
import { HashRouter } from 'react-router';


function App() {
  return (
    <>
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Account />} />
        <Route path="/view" element={<ViewAccounts />} />
        <Route path="/update" element={<h1>This is update page</h1>} />
      </Routes>
      </HashRouter>
    </>
  );
}

export default App;
