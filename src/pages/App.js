import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home/Home";
import Setting from "./Setting/Setting";
import Community from "./Community/Community";
import Header from "../components/Header/Header";
import Error from "./Error/Error";
import Profile from "./Profile/Profile";

export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
