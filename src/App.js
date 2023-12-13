
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Property from "./Pages/Property";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ProSingle from "./Pages/ProSingle";
import Agent from "./Pages/Agent";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/property" element={<Property />}></Route>
          <Route path="/proSingle" element={<ProSingle />}></Route>
          <Route path="/agents" element={<Agent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
