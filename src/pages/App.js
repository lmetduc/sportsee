import Header from "../components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Setting from "../pages/Setting/Setting";
import Activity from "./Dev/Activity";
import AverageSessions from "./Dev/AverageSessions";
import Performance from "./Dev/Performance";
import Error from "../pages/Error/Error";
import Profile from "../pages/Profile/Profile";
import SportsMenu from "../components/SportsMenu/Sportsmenu";
import "./App.css";
import User from "./Dev/User";

export default function App() {

  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 

          <Route path="/user/:id" element={<User />} />
          <Route path="/user/:id/activity" element={<Activity />} />
          <Route path="/user/:id/average-sessions" element={<AverageSessions />} />
          <Route path="/user/:id/performance" element={<Performance />} />


          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
