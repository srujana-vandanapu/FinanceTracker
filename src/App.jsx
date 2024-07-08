import Expenditure from "./components/Expenditure/Expenditure";
import Income from "./components/Income/Income";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import History from "./components/History/History";
import Signup from "./components/Sign-UP/Signup";
import Login from "./components/Login/Login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/expenditure" element={<Expenditure />}></Route>
        <Route path="/income" element={<Income />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
