import './App.css';
import { SignIn } from "./components/signin"
import { SignOut } from "./components/signout"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { StudentProfile } from "./components/pages/StudentProfile"


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/profile" element={<StudentProfile/>} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
