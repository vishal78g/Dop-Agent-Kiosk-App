
import {Routes , Route,BrowserRouter as Router  } from "react-router"; 
import Account from "./Account";
import ViewAccounts from "./ViewAccounts"
import Navigation from "./Navigation";
import Home from "./Home";

function App() {
  return (
    <>
      <Router basename="/Dop-Agent-Kiosk-App">
      <Navigation />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Account />} />
        <Route path="/view" element={<ViewAccounts />} />
        <Route path="/update" element={<h1>This is update page</h1>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
