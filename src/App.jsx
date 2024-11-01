import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Dashboard from "./pages/Dashboard";
import Groups from "./pages/Groups";
import Admin from "./pages/Admin";
import Faq from "./pages/Faq";
import PageNotFound from "./pages/PageNotFound";
import UploadVideos from "./pages/UploadVideos";
import OnBoardings from "./Pages/OnBoardings";

import AppLayout from "./ui/AppLayout";
import Register from "./components/auth/Register";
import Auth from "./Pages/Auth";
import Login from "./components/auth/Login";
import Verify from "./components/auth/Verify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<AppLayout />}> */}
          <Route index element={<Navigate replace to="auth" />}></Route>

            {/* <Route index element={<Navigate replace to="dashboard" />}></Route> */}
            <Route path="auth" element={<Auth />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="verify" element={<Verify />}></Route>

            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="groups" element={<Groups />}></Route>
            <Route path="uploadVideos" element={<UploadVideos />}></Route>
            <Route path="admin" element={<Admin />}></Route>
            <Route path="faq" element={<Faq />}></Route>
            <Route path="onBoardings" element={<OnBoardings />}></Route>
          {/* </Route> */}
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
