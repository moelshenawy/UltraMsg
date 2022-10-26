import React from "react";
import { images } from "../../constants";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./SEO.scss";
import { CiMonitor } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { TbLetterB } from "react-icons/tb";
import { FiFeather, FiCode, FiGitMerge, FiSettings } from "react-icons/fi";
import { BiUserCheck } from "react-icons/bi";
const SEO = () => {
  return (
    <>
      <section className="seo section border-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="seo-title mb-4 pb-2">
                <h4 className="title mb-4">
                  UltraMsg is Developer-friendly API for integration
                </h4>
                <p className="seo-desc text-muted mb-0 mx-auto">
                  Ultramsg is a multifunctional API for WhatsApp And Best Tool
                  for businesses and programmers, which can be integrated into
                  any accounting system, CRM, ERP, or website to send messages,
                  notify users, and much more.
                </p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 mt-4 pt-2">
                <img
                  src={images.seo}
                  alt="UltraMsg is Developer-friendly API for integration"
                />
              </div>
              <div className="col-lg-7 col-md-6 mt-4 pt-2">
                <div className="ms-lg-5">
                  <h4 className="title mb-4">
                    Communicate with Your Audience Through WhatsApp API
                  </h4>
                  <p className="text-muted">
                    Reach over 2.1 billion users worldwide using WhatsApp API.
                  </p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-1">
                      <span className="icon h5 me-2">
                        <AiOutlineCheckCircle />
                      </span>
                      Boost Notification Open Rate by 20X
                    </li>
                    <li className="mb-1">
                      <span className="icon h5 me-2">
                        <AiOutlineCheckCircle />
                      </span>
                      80% Decrease in Order Processing Time
                    </li>

                    <li className="mb-1">
                      <span className="icon h5 me-2">
                        <AiOutlineCheckCircle />
                      </span>
                      Less Customer Wait Time
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="seo">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="seo-title mb-4 pb-2">
                <h4 className="title mb-4">
                  Experience the Potential of WhatsApp business API Use Cases
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
                  <CiMonitor />
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Chatbots</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
                  <AiOutlineHeart />
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Remarketing</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
                  <AiOutlineEye />
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Customer Support</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
                  <TbLetterB />
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Multimedia Messages</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
                  <FiFeather />
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Notifications</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
                  <FiCode />
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Reminders</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
                  <BiUserCheck />
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Verification & Authentication</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
                  <FiGitMerge />
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Customer Communication</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
                  <FiSettings />
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Automation</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SEO;
