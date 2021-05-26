import React from "react";

export default function Footer() {
  const text =
    "Page authored by Louis Martin.                    Last Modified 5/26/2021";
  return (
    <div className="footer">
      <small> {text} </small>
    </div>
  );
}
