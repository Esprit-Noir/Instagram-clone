import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Profile from '../pages/profile/Profile';

function Router() {
  return (
    <div>
      <div className="flex">
        <div className="w-[20%] border border-l-slate-500">
          <Sidebar />
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/username" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Router;
