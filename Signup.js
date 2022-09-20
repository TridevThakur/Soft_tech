import React from "react";
import { useState } from "react";
import "./ima.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./NavBar";
function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setHandle] = useState("");
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const profession = [
    "Project Manager",
    "Accountant",
    "Accounting technician",
    "Actuary",
    "Adult nurse",
    "Advertising account executive",
    "Advertising account planner",
    "Advertising copywriter",
    "Advice worker",
    "Advocate (Scotland)",
    "Aeronautical engineer",
    "Agricultural consultant",
  ];
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setHandle(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    localStorage.setItem("LoginData", JSON.stringify({ email, password,phone,profession:value,name }));
    toast("Signup Successful");
    navigate("/Login");
    // axios.post('https://reqres.in/api/register', {
    //   name:name,
    //   email: email
    //   password: password
    //  })
    //  .then(result => {
    //   navigate("/login")

    //   localStorage.setItem("hi","hello")
    //   console.log(result)
    //   alert(`Successfully Registered in!!`)

    //   })
    //   .catch(error => {
    //     alert("Invalid Credentials")
    //   console.log(error)
    // })
  };

  return (
    <div className="a">
      <form onSubmit={handleSubmit} className="form">
        <h5 className="g">Register</h5>
        <div class="form-group mb-4">
          <label className="c"> Name:</label>
          <input
            type="text"
            name="name"
            className="f"
            value={name}
            onChange={handleName}
          />

          <label className="c">E-mail:</label>
          <input
            value={email}
            onChange={handleEmail}
            autoComplete="off"
            type="email"
          />
          <label className="c">Phone No:</label>
          <input
            value={phone}
            onChange={handlePhone}
            autoComplete="off"
            type="tel"
          />

          <label className="c">Password:</label>
          <input value={password} onChange={handlePassword} type="password" />
          <label className="c">Profession:</label>
          <select
            className="browser-default"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            <option value="" disabled selected>
              Choose your option
            </option>
            {profession.map((option) => {
              return <option value={option}>{option}</option>;
            })}
          </select>
        </div>
        <div className="g mt-4">
          <button type="submit" className="waves-effect waves-light btn-small">
            Submit
          </button>
          <h6>
            <Link to="/login">Already have an account?</Link>
          </h6>
        </div>
      </form>
    </div>
  );
}

export default Signup;
