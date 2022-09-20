import React from "react";
import { useState } from "react";
import "./ima.css";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = (e) => {
    e.preventDefault();
    const logInDetails=JSON.parse(localStorage.LoginData??"{}")
    if(logInDetails.email===email&&logInDetails.password===password){
      toast("Login Successful")
      navigate("/Posts")
    }else{
      toast("Invalid Credentials")

    }
  }

  return (
    <div className="a">
      <form onSubmit={handleApi} className="form1">
        <h5 className="g">Login</h5>

        <label className="c">E-mail:</label>
        <input
          value={email}
          onChange={handleEmail}
          autoComplete="off"
          type="email"
        />

        <label className="c">Password:</label>
        <input value={password} onChange={handlePassword} type="password" />
        <br />
        <br />
        <br />

        <div className="g">
          <button type="submit" className="waves-effect waves-light btn-small" >Submit</button>
        
          <h6>
            <Link to="/signup">Don't have an account?</Link>
          </h6>
        </div>
      </form>
    </div>
  );
}

export default Login;
