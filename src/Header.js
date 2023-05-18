import React from "react";
import "./styles.css";
export default function Header() {
  return (
    <div className="header">
      <div className="head-left">
        <ul>
          <li>DailyWorks</li>
        </ul>
      </div>
      <div className="head-right">
        <ul>
          <li>Interview Task</li>
          <li>React Appplication</li>
        </ul>
      </div>
    </div>
  );
}
