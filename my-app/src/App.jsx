// src/App.jsx
import React from "react";
import './App.css';
import discordLogo from "./assets/discord-logo-white.png";
import iconImage from "./assets/menu-icon.png";
import heroImage from "./assets/discord-background.png";

function App() {
  return (
<div>
    
      <nav className="logo-container">
        <img src={discordLogo} alt="Discord Logo" className="logo"></img>
        <img src={iconImage} alt="Icon Logo" className="menu-icon"></img>
      </nav>

      <div className="hero">
      <div className="hero-content">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club,a gaming group or worldwide art community. Where just you and a handful of friends can spend time together.
          A place that makes it easy to talk everyday and hangout more often.
          </p>
          <div className="hero-buttons">
            <button className="download-btn">Download for Mac</button>
            <button className="browser-btn">Open Discord in your browser</button>
          </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Discord landing page"></img>
      </div>
      </div>
      </div>
  );
}

export default App;