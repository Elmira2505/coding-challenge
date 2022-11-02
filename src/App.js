

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/dashboard/HomePage";
import CustomerCards from "./pages/dashboard/customers/CustomerCards";
import CustomerProfile from "./pages/dashboard/customers/CustomerProfile";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="dashboard/*" element={<Dashboard />} />
                    <Route path="*" element={<Home />} />
                    <Route path="/customers/:CustomerId" element={<CustomerProfile />} />

                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
