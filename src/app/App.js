import './App.css';
import React from 'react';
import SingInPanel from "../sign_in_panel/SignInPanel";
import WallPanel from "../user_panel/WallPanel";
import {Route, Routes} from "react-router-dom";
import RegisterPanel from "../register_panel/RegisterPanel";

function App() {
    const [user,setUser] = React.useState(null)

      return (
          <div className="App">
              {user != null &&
                  <WallPanel user={user}/>
              }
              {user == null &&
                  <Routes>
                      <Route path="/" element={ <SingInPanel userSetter={setUser}/> }/>
                      <Route path="/register" element={ <RegisterPanel userSetter={setUser}/> }/>
                  </Routes>
              }
          </div>
      );
}

export default App;
