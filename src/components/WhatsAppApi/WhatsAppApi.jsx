import React from "react";
import "./WhatsAppApi.scss";
import { AiOutlinePieChart } from "react-icons/ai";
import { images } from "../../constants";

const WhatsAppApi = () => {
  return (
    <section
      id="whatsapp-api"
      className="whats-section text-center pt-5 pb-5 bg-light"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="text-center mb-4 pb-2">
              <AiOutlinePieChart className="whats-icon h2" />
              <h4 className="whats-title mt-3 mb-4">
                Start working with Ultramsg and send messages via WhatsApp REST
                API
              </h4>
              <p className="text-muted mb-0">
                Make a chatbot and integrate WhatsApp with your systems:
                ERP,CRM, your app or website.
              </p>
              <p className="text-muted mb-0">
                You can use any programmable language to easily .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="col mt-4 pt-2">
          <img src={images.code} alt="code" className="whats-img" />
        </div>
      </div>
    </section>
  );
};

export default WhatsAppApi;
