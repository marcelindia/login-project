import { useState } from "react";
import "./App.css";
import react from "react";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {loginStatus && <h1>Welcome Back!</h1>}
        {!loginStatus && <h1>Please Login.</h1>}

        <div>
          {!loginStatus ? (
            <button onClick={() => setLoginStatus(true)}>LOGIN</button>
          ) : (
            <button onClick={() => setLoginStatus(false)}>LOGOUT</button>
          )}
          <div>{loginStatus && <h2>IT WORKED!!</h2>}</div>
        </div>
      </header>
    </div>
  );
}
//ygbyg
export default App;
