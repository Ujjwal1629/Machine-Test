import React from "react";
import "./Header.css";
//React Icons
import {
  AiOutlineSearch,
  AiFillCaretDown,
  AiOutlineUser,
} from "react-icons/ai";

export default function Header() {
  return (
    <div className="header">
      <div className="header_title">
        <h1>Test App</h1>
      </div>
      <div className="header_contents">
        <p>
          Browse <AiFillCaretDown className="icon_down" />
        </p>
        <p>
          Template <AiFillCaretDown className="icon_down" />
        </p>
        <p>
          Demo <AiFillCaretDown className="icon_down" />
        </p>
        <button>
          <AiOutlineUser /> Login
        </button>
        <AiOutlineSearch className="icon_search" />
      </div>
    </div>
  );
}
