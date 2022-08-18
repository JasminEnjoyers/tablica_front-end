import './App.css';
import React from 'react';
import SingInPanel from "../sign_in_panel/SignInPanel";
import UserPanel from "../user_panel/UserPanel";
import {Route, Routes} from "react-router-dom";

function App() {
    const [user,setUser] = React.useState(null)

      return (
          <div className="App">
              {user != null &&
                  <UserPanel user={user}/>
              }
              {user == null &&
                  <Routes>
                      <Route path="/" element={ <SingInPanel userSetter={setUser}/> }/>
                      <Route path="/register" element={ <UserPanel user={"cgyh"}/> }/>
                  </Routes>
              }
          </div>
      );
}

export default App;
