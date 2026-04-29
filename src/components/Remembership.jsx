import React from "react";
import Pagination from "../assets/Pagination.png";
import Star from "../assets/star.png";
import Square from "../assets/Square.png";
import Favorite from "../assets/favorite.png";
import Crown from "../assets/crown.png";
import Line from "../assets/Line.png";
import { Link } from "react-router-dom";
const Remembership = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div className="remembership">
            <p className="remembership__headTitle">
              You’ve reached this membership tier
            </p>
            <p className="remembership__description">
              1,540 Stars will expire on Sep 9, 2025
            </p>
            <p className="remembership__title">View & Redeem Rewards</p>
            <img src={Pagination} alt="Pagination" />
          </div>
          <div className="Links">
            <div className="link__card1">
              <Link to="/featured" className="Links__link1">
                <img className="link__icon" src={Crown} alt="Crown" />

                Featured
              </Link>
            </div>
            <div className="link__card1">
              <Link to="/deals" className="Links__link1">
                <img className="link__icon" src={Square} alt="Square" />

                Deals
              </Link>
            </div>
            <div className="link__card1">
              <Link to="/points" className="Links__link1">
                <img className="link__icon" src={Star} alt="Star" />

                Points
              </Link>
            </div>
            <div className="link__card1">
              <Link to="/perks" className="Links__link1">
                <img className="link__icon" src={Favorite} alt="Favorite" />

                Perks
              </Link>
            </div>
          </div>
          <img className="line" src={Line} alt="Line" />
        </div>
      </div>
    </div>
  );
};

export default Remembership;
