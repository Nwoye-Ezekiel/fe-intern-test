import React, { useState, useEffect } from "react";
import "./SignIn.css";
import Hide from "./Assets/hide.svg";
import Show from "./Assets/show.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("rememberMe")) {
      if (localStorage.getItem("rememberMe") !== null) {
        let data = JSON.parse(localStorage.getItem("rememberMe"));
        setEmail(data.email);
        setPassword(data.password);
        setCheckbox(data.checkbox);
        console.log(data);
      }
    }
  }, []);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 5000);
    const formProps = Object.fromEntries(new FormData(e.target));
    formProps.checkbox = checkbox;
    let credentials = JSON.stringify(formProps);
    if (checkbox === true) localStorage.setItem("rememberMe", credentials);
    else localStorage.removeItem("rememberMe");
    return () => clearTimeout(timer);
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email address"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <img
            onClick={handleShowPassword}
            src={showPassword ? Show : Hide}
            alt="icon"
          />
        </div>
        <div className="remember-me-cont">
          <input
            name="checkbox"
            checked={checkbox}
            onChange={handleCheckboxChange}
            type="checkbox"
          />
          <span className="remember-me">Remember me</span>
        </div>
        <button type="submit">
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} spin={true} />
          ) : (
            "SIGN IN"
          )}
        </button>
        <p className="forgot-password">I forgot my password</p>
      </form>
    </div>
  );
}
