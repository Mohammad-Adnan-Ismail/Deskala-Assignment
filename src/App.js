import './App.css';
import SignUp from './Component/Form/SignUp/SignUp';
import { Route, Routes } from 'react-router-dom';
import LogIn from './Component/Form/SignUp/LogIn';
import Home from './Component/H/Home';
import CreateCandidate from './Component/List/CreateCandidate';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp></SignUp>} />
        <Route path="/login" element={<LogIn></LogIn>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/createcandidate" element={<CreateCandidate></CreateCandidate>} />
      </Routes>
    </div>
  );
}

export default App;
