

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
                    <Route path="dashboard/orders/customers/:CustomerId" element={<CustomerCards />} />

                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
