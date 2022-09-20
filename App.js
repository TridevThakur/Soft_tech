import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Company from "./components/Company";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <NavBar />
      
      <Routes>
        <Route path="/Posts" element={<Posts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
