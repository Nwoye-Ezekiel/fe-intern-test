import React from "react";
import "./Intro.css";
import { useHistory } from "react-router-dom";

export default function Intro() {
  let history = useHistory();
  setTimeout(() => {
    history.push("/sign-in");
  }, 7000);

  return (
    <div className="intro-container">
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_efsb0hef.json"
        background="transparent"
        speed="1"
        style={{ width: "300px ", height: "400px" }}
        autoplay
      ></lottie-player>
    </div>
  );
}
