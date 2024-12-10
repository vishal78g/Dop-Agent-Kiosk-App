
import { BrowserRouter, Routes , Route } from "react-router"; 
import Account from "./Account";
import ViewAccounts from "./ViewAccounts"
import Navigation from "./Navigation";
import Home from "./Home";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/Dop-Agent-Kiosk-App" element={<Home />} />
        <Route path="/Dop-Agent-Kiosk-App/add" element={<Account />} />
        <Route path="/Dop-Agent-Kiosk-App/view" element={<ViewAccounts />} />
        <Route path="/Dop-Agent-Kiosk-App/update" element={<h1>This is update page</h1>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
