import React, { useState, useEffect } from "react";
import imgLogo from "./Logo.png";
import "./Headers.css";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  return (
    <>
      <nav className={`main-nav`}>
        <div className="Logo">
          <img src={imgLogo} alt="Logo" />
        </div>

        <div className="menu-link">
          <ul>
            <li>
              <a href="#">Trang Chủ</a>
            </li>
            <li>
              <a href="#">Mã Giảm Giá</a>
            </li>
            <li>
              <a href="#">Sản Phẩm</a>
            </li>
            <li>
              <a href="#">Bộ Sưu Tập</a>
            </li>
          </ul>
        </div>

        <div className="searchBar">
          <input type="text" placeholder="Tìm kiếm....."></input>
          <button type="submit">
            <svg
              fill="currentColor"
              className="searchicon"
              width="1em"
              height="1em"
              viewBox="-3 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
            </svg>
          </button>
        </div>

        <div class="button-container">
          <a href="#">
            <button class="button">
              <svg
                fill="currentColor"
                width="1em"
                height="1em"
                viewBox="-3 -2 24 24"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
                class="icon"
              >
                <path d="M13.666 11.782L13 11.186V6a4 4 0 1 0-8 0v5.186l-.666.596A6.987 6.987 0 0 0 2.29 15h13.42a6.987 6.987 0 0 0-2.044-3.218zM12 17a3 3 0 0 1-6 0H0a8.978 8.978 0 0 1 3-6.708V6a6 6 0 1 1 12 0v4.292A8.978 8.978 0 0 1 18 17h-6zm-3 1a1 1 0 0 0 1-1H8a1 1 0 0 0 1 1z" />
              </svg>
            </button>
          </a>

          <a href="#">
            <button class="button">
              <svg
                fill="currentColor"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
              </svg>
            </button>
          </a>

          <a href="#">
            <button class="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                stroke-linejoin="round"
                stroke-linecap="round"
                viewBox="0 0 24 24"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
                class="icon"
              >
                <circle r="1" cy="21" cx="9"></circle>
                <circle r="1" cy="21" cx="20"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
          </a>

          <a href="#">
            <button class="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                stroke-width="0"
                fill="currentColor"
                stroke="currentColor"
                class="icon"
              >
                <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
              </svg>
            </button>
          </a>
        </div>

        <div className="Hamburger-menu">
          <a href="#">
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
