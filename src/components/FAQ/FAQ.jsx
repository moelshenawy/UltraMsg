import React from "react";
import "./FAQ.scss";
import faqData from "../../data/faq/faq.json";
import { FiHelpCircle } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

const FAQ = () => {
  const { faqs } = faqData;
  return (
    <>
      <section id="faq" className="faq-section">
        <div className="container">
          <center>
            <h4 className="faq-title mb-5">FAQ</h4>
          </center>
          <div className="row">
            {faqs.map((faq, index) => (
              <div className="col-md-6 col-12 mt-4 pt-2" key={index}>
                <div className="d-flex">
                  <FiHelpCircle class="faq-icon mt-1 me-2" />
                  <h5 className="faq-question">{faq.question}</h5>
                </div>
                <p className="faq-answer mb-0">{faq.answer1}</p>
                <p className="faq-answer mb-0">{faq.answer2}</p>
                <p className="faq-answer mb-0">{faq.answer3}</p>
                <p className="faq-answer mb-0">{faq.answer4}</p>
                <p className="faq-answer mb-0">{faq.answer5}</p>
              </div>
            ))}
          </div>
          <div className="row my-md-5 pt-md-3 my-4 pt-2 pb-lg-4 justify-content-center">
            <div className="col-12 text-center">
              <div className="faq-contact">
                <h4 className="title mb-4">Have Question? Get in touch!</h4>
                <p className="text-muted mx-auto"></p>
                <p className="text-muted mb-0">
                  We always listen to our clients.
                </p>
                <p className="text-muted mb-0">
                  That’s why Ultramsg is friendly and easy to use.
                </p>
                <p className="text-muted mb-0">
                  If you have any wishes for the functionality, talk to us, so
                  you can help develop the service.
                </p>
                <a
                  href="mailmailto:info@ultramsg.com"
                  className="btn btn-primary mt-4 faq-contact-btn"
                >
                  <BsTelephone className="me-2" />
                  Contact US
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="position-relative">
        <div className="shape overflow-hidden text-footer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#19283f"
              fillOpacity="1"
              d="M0,256L1440,192L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default FAQ;
