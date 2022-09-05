import Header from "../components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Setting from "../pages/Setting/Setting";
import Community from "../pages/Community/Community";
import Error from "../pages/Error/Error";
import Profile from "../pages/Profile/Profile";

export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          {/*<Route path="/:id" element={<Home />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/community" element={<Community />} />

          <Route path="/user/:id/activity" element={<Community />} />
          <Route path="/user/:id/average-sessions" element={<Community />} />
          <Route path="/user/:id/performance" element={<Community />} />
          <Route path="*" element={<Error />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}
