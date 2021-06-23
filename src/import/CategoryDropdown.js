import React, { useState } from "react";
import { Link } from "react-router-dom";

function CategoryDropdown() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick((click) => !click);
  }

  return (
    <ul
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      <li>Computer </li>
      <li>Internet</li>
    </ul>
  );
}

export default CategoryDropdown;
