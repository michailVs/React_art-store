import React, { useState } from 'react';
import AppRoute from './components/AppRoute';
import Navbar from './components/UI/Navbar/Navbar';
import './styles/App.css'
import { AuthContext } from "./context";


function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <div className="App">
        <Navbar/>
        <AppRoute/>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
