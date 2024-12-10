
import {Routes , Route } from "react-router"; 
import Account from "./Account";
import ViewAccounts from "./ViewAccounts"
import Navigation from "./Navigation";
import Home from "./Home";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Account />} />
        <Route path="/view" element={<ViewAccounts />} />
        <Route path="/update" element={<h1>This is update page</h1>} />
      </Routes>
    </>
  );
}

export default App;
