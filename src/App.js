import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main/Main';
import Signup from './components/Signup';
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from './context/UserAuthContext';
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
		 <UserAuthContextProvider>
			 <Routes>
			 <Route
                path="/home"
                element={
                  <ProtectedRoute>
                   
					<Main />	
                  </ProtectedRoute>
                }
              />
				 <Route path="/" element={<Login />} />
				 <Route path="/signup" element={<Signup />} />
			 </Routes>
			 </UserAuthContextProvider>
			 </div>
    </div>
  );
}

export default App;
