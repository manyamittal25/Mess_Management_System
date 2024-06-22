// eslint-disable-next-line no-unused-vars

// ------------------------------------------------------------
// import React from 'react';
// import Heading from './components/Heading';
// import TimingTable from './components/TimingTable';
// import WeekMenuTable from './components/WeekMenuTable';
import './styles/App.css';
// ------------------------------------------------------------

import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";

// Utilities
import AnimationLayout from "./utility/routeAnimation";
import RemoveLoader from "./utility/removeLoader";

// Components
// import MenuBar from './components/MenuBar';

// Route Pages
import SchedulePage from "./routes/Schedule";
// import QRCodePage from './routes/QRCode';
// import PurchaseHistoryPage from './routes/PurchaseHistory';
// import BuyPage from './routes/Buy';
// import AdminPanel from './routes/AdminPanel';
// import TotalMealsPage from './routes/TotalMeals';
// import ScanQRPage from './routes/ScanQR';

function App() {
  // useEffect(RemoveLoader, []); //Remove the loader after the page is loaded
  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <MenuBar />
        <Routes>
          <Route element={<AnimationLayout />}>
            <Route path="/" element={<SchedulePage />} />
            {/* <Route path="/qr-code" element={<QRCodePage />} /> */}
            {/* <Route path="/purchase-history" element={<PurchaseHistoryPage />} /> */}
            {/* <Route path="/buy-coupons" element={<BuyPage />} /> */}
            {/* <Route path="/admin" element={<AdminPanel />} /> */}
            {/* <Route path="/total-meals" element={<TotalMealsPage />} /> */}
            {/* <Route path="/scan-qr" element={<ScanQRPage />} /> */}
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
