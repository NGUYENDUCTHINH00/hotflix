import "./App.css";
import Header from "./components/header/Header";
import Section1 from "./components/body/Section1";
import Section2 from "./components/body/Section2";
import Section3 from "./components/body/Section3";
import Section4 from "./components/body/Section4";
import Footer from "./components/footer/Footer";
import Headerview from "./components/body/view/header/Headerview";
import Ssview1 from "./components/body/view/body/Ssview1";
import Ssview2 from "./components/body/view/body/Ssview2";
import Footerview from "./components/body/view/footer/Footerview";
import Login from "./components/Login/Login";
import Register from "./components/Signup/SignUp";
import Admin from "./components/admin/Admin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/homepage'
          element={
            <div>
              <Header />
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Footer />
            </div>
          }
        />
        <Route
          path='/trailer'
          element={
            <div>
              <Headerview />
              <Ssview1 />
              <Ssview2 />
              <Footerview />
            </div>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
