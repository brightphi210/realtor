
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signupCreative" element={<SignUp2 />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/talents" element={<Talents />}></Route>
          <Route path="/registerOption" element={<RegistraionOption />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
