import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

import Card from "./Card.js";
import { useSelector } from "react-redux";
function UserLayout() {


    


  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <div
        className="offcanvas offcanvas-end"
        id="cartPreview"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Cart
          </h5>
          <button
            type="button"
            id="close-btn"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <Card
       
        />
      </div>
    </div>
  );
}

export default UserLayout;
