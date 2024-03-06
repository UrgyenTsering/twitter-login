import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <div className="logo-box">
          <img src="./twitter.png" alt="" />
          <h1>Sign in to Twitter</h1>
        </div>
        <div className="section">
          <button className="sec-btn">
            <img src="google.png" alt="" />
            sign in with Google
          </button>
          <button className="sec-btn"> 
            <img src="apple-logo.png" alt="" />
            sign in with Apple
          </button>
          <div className="hr-box">
          <hr /><span>Or</span> <hr />
          </div>
          <form>
            <input className='input' type="text" placeholder="Phone, email/username" />
            <button className="next">Next</button>
          </form>
          <button className="sec-btn">Forgot password?</button>
        </div>
        <div className="link-div">
          <p>Don't have an account? Sign up</p>
        </div>
      </div>
    </div>
  );
}

export default App;
