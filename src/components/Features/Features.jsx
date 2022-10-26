import React from "react";
import { VscSignIn } from "react-icons/vsc";
import { FaQrcode } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import "./Features.scss";

const Features = () => {
  return (
    <>
      <section className="text-center pt-5 pb-5 border-bottom">
        <div className="container">
          <div className="main-title mt-5 mb-5 position-relative">
            <h2>How it works ?</h2>
            <p className="text-black-50 mb-0 mx-auto">
              Fixed price no hidden fees, unlimited messages, no cost per
            </p>
            <p className="text-black-50  mb-0 mx-auto">
              message Quick Onboarding in less than 5 minutes
            </p>
          </div>

          <div className="row">
            <div className="col-md-4 col-12 mt-5">
              <div className="features text-center">
                <div className="image position-relative d-inline-block">
                  <VscSignIn className="h2" />
                </div>
                <div className="content mt-4">
                  <h3 className="h5">Create Account</h3>
                  <p className="text-muted mb-0">
                    Sign up and create instance to get your instance
                    <br />
                    ID and Token
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12 mt-5">
              <div className="features text-center">
                <div className="image position-relative d-inline-block">
                  <FaQrcode className="h2" />
                </div>

                <div className="content mt-4">
                  <h3 className="h5">Scan QR</h3>
                  <p className="text-muted mb-0">
                    Scan QR to authenticate your instance to send
                    <br />
                    messages via your WhatsApp number
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12 mt-5">
              <div className="features text-center">
                <div className="image position-relative d-inline-block">
                  <AiOutlineSend className="h2" />
                </div>
                <div className="content mt-4">
                  <h3 className="h5">Start Sending messages</h3>
                  <p className="text-muted mb-0">
                    Start sending messages via API with your
                    <br />
                    favorite programming languages
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
