import React from "react";
import Logo from "../../assets/logos.png";
import leftArrow from "../../assets/left-arrow.png";
const Navbar = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div className="navbar">
            <h1 className="time">9:41</h1>
            <img src={Logo} alt="logo" className="logo" />
          </div>
          <div className="down__card">
            <img src={leftArrow} alt="left arrow" className="left-arrow" />
            <h2 className="navbar__title">Đặc quyền thương hiệu</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
