import React from "react";
// AiFillFacebook
import {AiFillFacebook} from "react-icons/ai";
import {CiTwitter} from "react-icons/ci";
import {AiOutlineInstagram} from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-1">
        <div className="footer-des">
          <h1 className="atoms">atoms</h1>
          <p>
            "stay in the know on product releases, <br />
            founder news, and all things Atoms.
          </p>
          <input
            type="text"
            className="footer-input"
            placeholder="Enter email here for updates"
          />
        </div>
        <div className="footer-list">
          <ul>
            <li>
              <h1>Product</h1>
            </li>
            <li>
              <a href="#">Model 000</a>
            </li>
            <li>
              <a href="#">Model 001</a>
            </li>
            <li>
              <a href="#">Laces</a>
            </li>
            <li>
              <a href="#">Masks</a>
            </li>
            <li>
              <a href="#">No-show socks</a>
            </li>
            <li>
              <a href="#">Crew Socks</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
          </ul>

          <ul>
            <li>
              <h1>Support</h1>
            </li>
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Order Status</a>
            </li>
            <li>
              <a href="#">Return & Exchanges</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
          <ul>
            <li>
              <h1>Everything Else</h1>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Why Atoms</a>
            </li>
            <li>
              <a href="#">About Atoms</a>
            </li>
            <li>
              <a href="#">Discount program</a>
            </li>
            <li>
              <a href="#">Atoms content</a>
            </li>
            <li>
              {" "}
              <a href="#">AAG Gallery</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
          </ul>

          <ul>
            <li className="img-list">
              <a href="#">
                <AiFillFacebook />
                Facebook
              </a>
            </li>
            <li className="img-list">
              <a href="#">
                <CiTwitter />
                Twitter
              </a>
            </li>
            <li className="img-list">
              <a href="#">
              <AiOutlineInstagram />
              Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
