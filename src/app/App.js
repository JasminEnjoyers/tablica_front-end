import './App.css';
import React from 'react';
import SingInPanel from "../sign_in_panel/SignInPanel";
import WallPanel from "../wall_panel/WallPanel";
import {Route, Routes} from "react-router-dom";
import RegisterPanel from "../register_panel/RegisterPanel";
import UserPanel from "../user_panel/UserPanel";
import DodanePanel from "../dodane_panel/DodanePanel";

function App() {
    const [user,setUser] = React.useState(null)

      return (
          <div className="App">
              {user != null &&
                  <Routes>
                      <Route path="/" element={ <WallPanel user={user}/> }/>
                      <Route path="/register" element={ <WallPanel user={user}/> }/>
                      <Route path="/user" element={ <UserPanel user={user}/> }/>
                      <Route path="/user/posty" element={ <DodanePanel user={user}/> }/>
                  </Routes>
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
