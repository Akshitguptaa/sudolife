import React from "react";
import VideoBackground from "../video-bg/video-bg.component";
import Rocket from "../rocket/rocket.component";
import Countdown from "../countdown/countdown.component";
import Cursor from "../cursor/cursor.component";
import "./container.styles.scss";

const Container = () => {
  return (
    <div className="container">
      <VideoBackground />
      <div className="overlay"></div>

      <div className="content">
        <p>WE ARE UNDER MAINTENANCE</p>
        <h1>
          We're <span>Launching</span> Soon
        </h1>
        <Countdown targetDate="July 20, 2024 00:00:00" />
        <button type="button">
          Learn More
        </button>
      </div>

      <Rocket />

      <Cursor />

      <footer>
        <p>Made by Akshit - sudoLife</p>
      </footer>
    </div>
  );
};

export default Container;
