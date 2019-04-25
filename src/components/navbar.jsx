import React, { Component } from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <span className="navbar-brand mb-0 h1 m-2">
        <span className="m-3">
          <img
            src="https://png.pngtree.com/svg/20160812/63cdf40a9e.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            padding="15"
          />
        </span>
        Total items:
        <span className="m-3">{props.onTotal()}</span>
      </span>
    </nav>
  );
};

export default NavBar;
