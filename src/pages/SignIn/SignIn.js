import React, { useState } from "react";
import "./SignIn.css";
import Hide from "./Assets/hide.svg";
import Show from "./Assets/show.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <div className="input-container">
          <input type="email" placeholder="Email address" required />
        </div>
        <div className="input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <img
            onClick={handleShowPassword}
            src={showPassword ? Show : Hide}
            alt="icon"
          />
        </div>
        <div className="remember-me-cont">
          <input type="checkbox" />
          <span className="remember-me">Remember me</span>
        </div>
        <button type="submit">
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} spin={true} />
          ) : (
            "SIGN IN"
          )}
        </button>
      </form>
    </div>
  );
}
