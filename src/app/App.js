import './App.css';
import React from 'react';
import SingInPanel from "../sign_in_panel/SignInPanel";
import WallPanel from "../user_panel/WallPanel";
import {Route, Routes} from "react-router-dom";

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
                      <Route path="/register" element={ <WallPanel user={"cgyh"}/> }/>
                  </Routes>
              }
          </div>
      );
}

export default App;
