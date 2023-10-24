import "./header.css";

import { useState } from "react";

function Header() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleToggleChange = (option) => {
    setSelectedOption(option);

    if (option === "option1") {
      document.querySelector("body")?.setAttribute("data-theme", "normal");
      localStorage.setItem("selectedTheme", "normal");
    } else if (option === "option2") {
      document.querySelector("body")?.setAttribute("data-theme", "light");
      localStorage.setItem("selectedTheme", "light");
    } else if (option === "option3") {
      document.querySelector("body")?.setAttribute("data-theme", "dark");
      localStorage.setItem("selectedTheme", "dark");
    }
  };

  return (
    <header>
      <h2>calc</h2>
      <div className="theme">
        <p>THEME</p>
        <div>
          <div className="labels">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className="wrapper">
            <div className="toggle_radio">
              <input
                type="radio"
                id="option1"
                name="toggle_option"
                checked={selectedOption === "option1"}
                onChange={() => handleToggleChange("option1")}
              />
              <input
                type="radio"
                id="option2"
                name="toggle_option"
                checked={selectedOption === "option2"}
                onChange={() => handleToggleChange("option2")}
              />
              <input
                type="radio"
                id="option3"
                name="toggle_option"
                checked={selectedOption === "option3"}
                onChange={() => handleToggleChange("option3")}
              />
              <label htmlFor="option1"></label>
              <label htmlFor="option2"></label>
              <label htmlFor="option3"></label>
              <div className="toggle_option_slider"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
