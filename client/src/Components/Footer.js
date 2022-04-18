import React from "react";

export default function Footer() {
  const text =
    "Page authored by Louis Martin.                    Last Modified 4/18/2022";
  return (
    <div className="footer">
      <small> {text} </small>
    </div>
  );
}
