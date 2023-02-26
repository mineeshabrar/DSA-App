import './App.css';
import { SignIn } from "./components/signin"
import { SignOut } from "./components/signout"
import { Dashboard } from './components/dashboard';

function App() {
  return (
    <div className="App">
      DSA-App
      <SignIn/>
      <SignOut/>
      <Dashboard/>
    </div>
  );
}

export default App;
