import React from "react";

function Icon({ theme }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      style={{
        pointerEvents: "none",
        zIndex: 10,
        padding: "5px",
        position: "fixed",
        top: "5px",
      }}
      width="30"
      viewBox="0 0 48 48"
    >
      <path
        fill={theme}
        d="M24.8.9c-.4-.5-1.2-.5-1.6 0C19.8 5.3 7.1 22.5 7.1 30.6c0 9.3 7.6 16.9 16.9 16.9s16.9-7.6 16.9-16.9c0-8.1-12.7-25.3-16.1-29.7zm4.9 40.7c-.2.1-.4.1-.6.1-.6 0-1.2-.4-1.4-.9-.3-.8.1-1.6.8-2 5.9-2.4 5.4-9.6 5.3-9.7-.1-.8.5-1.6 1.4-1.6.8-.1 1.6.5 1.6 1.4.4 3.2-.8 10.1-7.1 12.7z"
      ></path>
    </svg>
  );
}

export default Icon;
