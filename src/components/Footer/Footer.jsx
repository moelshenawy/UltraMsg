import React from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { TfiAngleRight } from "react-icons/tfi";

const Footer = () => {
  return (
    <>
      <div id="whatsappchat">
        <a
          href="https://api.whatsapp.com/send?phone=971507032874&text=hello"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="whatsappimage"
            src={images.whatsApp}
            alt="WhatsApp Chat "
          />
          <span className="whatsapptext">
            <img
              className="whatsapp-icon"
              src={images.whatsAppRightIcon}
              alt="WhatsApp Chat"
            />
            <span>Hello, how can I help you ?</span>
          </span>
        </a>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-py-60">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                    <a href="/" className="logo-footer">
                      <img src={images.logoLight} alt="logo" height="24" />
                    </a>
                    <p className="mt-4">
                      Start working with{` `}
                      <span className="fw-bold">Ultramsg</span> {` `}
                      and send unlimited messages via WhatsApp REST API, we will
                      provide everything you need about technical support and
                      infrastructure.
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-2 col-12 mt-4 mt-sm-4 pt-2 pt-sm-0">
                    <h5 className="footer-head">Ultramsg</h5>
                    <ul className="list-unstyled footer-list mt-4">
                      <li>
                        <a href="/" className="text-footer">
                          <TfiAngleRight className="me-1" />
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-footer">
                          <TfiAngleRight className="me-1" />
                          API
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-footer">
                          <TfiAngleRight className="me-1" />
                          Tutorials
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-footer">
                          <TfiAngleRight className="me-1" />
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-footer">
                          <TfiAngleRight className="me-1" />
                          Contact US
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-footer">
                          <TfiAngleRight className="me-1" />
                          Sign in
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-2 col-12 mt-4 mt-sm-4 pt-2 pt-sm-0">
                    <h5 className="footer-head">Ultramsg</h5>
                    <ul className="list-unstyled footer-list mt-4">
                      <li>
                        <a href="/" className="text-footer">
                          <TfiAngleRight className="me-1" />
                          Whatsapp api Link Generator
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-footer">
                          <TfiAngleRight className="me-1" />
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-footer">
                          <TfiAngleRight className="me-1" />
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-footer">
                          <TfiAngleRight className="me-1" />
                          API Documentation
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-2 col-12 mt-4 mt-sm-4 pt-2 pt-sm-0">
                    <h5 className="footer-head">Ultramsg</h5>
                    <ul className="list-unstyled footer-list mt-4">
                      <li>
                        <a href="/" className="text-footer">
                          <TfiAngleRight className="me-1" />
                          Pabbly
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-footer">
                          <TfiAngleRight className="me-1" />
                          Pipedream
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-footer">
                          <TfiAngleRight className="me-1" />
                          Integrately
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-py-30 footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="text-sm-start">
                  <p className="mb-0">&copy; 2022 El-Shenawy</p>
                </div>
              </div>

              <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled text-sm-end mb-0">
                  <li className="list-inline-item">
                    <img
                      src={images.americanEx}
                      className="avatar avatar-ex-sm"
                      alt="American Express"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src={images.discover}
                      alt="Master Card"
                      className="avatar avatar-ex-sm"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src={images.masterCard}
                      alt="paypal"
                      className="avatar avatar-ex-sm"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img src={images.paypal} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
