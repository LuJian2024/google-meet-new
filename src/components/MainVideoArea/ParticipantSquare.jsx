/* eslint-disable react/prop-types */
import "./ParticipantSquare.css";
import { useState, useEffect } from "react";
import image from "../../assets/image.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ParticipantSquare = ({ name, photo }) => {
  const [borderColor, setBorderColor] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setBorderColor(Math.random() < 0.03 ? "blue" : "");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const initial = name.charAt(0).toUpperCase();
  const bgColor = getRandomColor();

  return (
    <div
      className="participant-square"
      style={{ borderColor: borderColor, borderWidth: "3px" }}
    >
      <div className="microphone-icon">
        {borderColor === "blue" ? (
          <p
            style={{
              fontSize: "35px",
              fontWeight: "700",
              color: "blue",
            }}
          >
            {/* <FontAwesomeIcon icon={faChartSimple} /> */}
            <img
              src={image}
              alt="blue-icon"
              color="rgb(102, 157, 246)"
              width="24px"
            />
          </p>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            color="white"
            viewBox="0 0 24 24"
            fill="white"
            className="Hdh4hc cIGbvc"
          >
            <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"></path>
            <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path>
          </svg>
        )}
      </div>
      <div className="initial" style={{ backgroundColor: bgColor }}>
        {initial}
      </div>
      {/* <div
        className="initial"
        style={{
          backgroundColor: photo ? "transparent" : bgColor,
          backgroundImage: photo ? `url(${photo})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {!photo && initial}
      </div> */}

      <div className="name">{name}</div>
    </div>
  );
};

export default ParticipantSquare;
