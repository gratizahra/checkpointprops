
import React from "react";
import Profile from "./profile/profilecom";
import "./App.css";

export default function App() {
  function handleName(name) {
    alert(`Hello my name is ${name}`);
  }

  return (
    <div className="App">
      <Profile
        fullName="Zahra Grati"
        bio="Hello , my name is Zahra Grati and i like web development"
        profession="Full-Stack js Developer"
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={"/images.png"}
          alt="imag"
        />
      </Profile>
     
    </div>
  );
}