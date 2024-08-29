import { useState } from "react";
import "./App.css";
import "./index.css";


function App() {
  const [action, setaction] = useState("Sign Up");

  return (
    <>
      <div className="container">
        <div className="heading">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src="./images/user_icon.jpeg" alt="" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="input">
            <img src="./images/email_icon.jpeg" alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src="./images/password_icon.jpeg" alt="" />
            <input type="password" placeholder="Password"/>
          </div>
        </div>
        <div className="forget-password">
          Lost Password ?<span>Click Here</span>
        </div>
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setaction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setaction("Login")}}>Login</div>
        </div>
      </div>
    </>
  );
}

export default App;
