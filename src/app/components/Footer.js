import React from "react";
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs'
const Footer = () => {
  return (
    <>
      <footer className="py-5 container">
        <div className="row" bis_skin_checked={1}>
          <div className="col-6 col-md-2 mb-3" bis_skin_checked={1}>
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3" bis_skin_checked={1}>
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3" bis_skin_checked={1}>
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1 mb-3" bis_skin_checked={1}>
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div
                className="d-flex flex-column flex-sm-row w-100 gap-2"
                bis_skin_checked={1}
              >
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                  fdprocessedid="gq21lyj"
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  fdprocessedid="9jji29"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"
          bis_skin_checked={1}
        >
          <p>© 2022 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#">
                <BsTwitter />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="https://www.instagram.com/imarjunshrma/">
                <BsInstagram />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <BsFacebook fill="#facebook" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
