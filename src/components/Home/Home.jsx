import React from "react";
import "./Home.scss";
import Features from "../Features/Features";
import { TfiWorld } from "react-icons/tfi";
import {
  FaPhp,
  FaAngular,
  FaPython,
  FaJava,
  FaWindows,
  FaRocket,
} from "react-icons/fa";
import { DiNodejs, DiAndroid, DiApple } from "react-icons/di";
import { BiBook } from "react-icons/bi";
import { WhatsAppApi, SEO, Tutorials, FAQ, Footer } from "../../components";
import Navbar from "./../Navbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />

      <section
        id="home"
        className="landing d-flex flex-column justify-content-center align-items-center"
      >
        <div className="landing-text text-center text-light">
          <h1 className="heading  mt-2 mb-2">WhatsApp API</h1>
          <p className="businesses badge rounded-pill bg-soft-primary mb-3">
            for medium and large businesses
          </p>
          <p className="para-desc mx-auto mb-3 h4">
            Enterprise-level API for $39/month.
          </p>
          <p className="para-desc mx-auto mb-0">
            Send and receive messages using HTTP requests.
          </p>
        </div>

        <div className="landing-btns mt-4">
          <a href="#signup" className="mt-2 me-2">
            <FaRocket className="me-2" />
            Free Trial
          </a>
          <a href="#apiDocs">
            <BiBook className="me-2" />
            API Documentation
          </a>
        </div>
      </section>
      <section className="landing-techs text-center pt-5 pb-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-1 col-md-1 col-3 text-center py4 text-primary">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.ultramsg.com/?docs_tab=http-1_1"
              >
                <TfiWorld />
                <p>REST</p>
              </a>
            </div>
            <div className="col-lg-1 col-md-1 col-3 text-center py4 text-primary">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ultramsg/whatsapp-php-sdk"
              >
                <FaPhp />
                <p>PHP</p>
              </a>
            </div>
            <div className="col-lg-1 col-md-1 col-3 text-center py4 text-primary">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.npmjs.com/package/ultramsg-whatsapp-api"
              >
                <DiNodejs />
                <p>Node</p>
              </a>
            </div>
            <div className="col-lg-1 col-md-1 col-3 text-center py4 text-primary">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.npmjs.com/package/ultramsg-whatsapp-api"
              >
                <FaAngular />
                <p>Angular</p>
              </a>
            </div>
            <div className="col-lg-1 col-md-1 col-3 text-center py4 text-primary">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.ultramsg.com/?docs_tab=python-python3"
              >
                <FaPython />
                <p>Python</p>
              </a>
            </div>
            <div className="col-lg-1 col-md-1 col-3 text-center py4 text-primary">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.ultramsg.com/?docs_tab=java-okhttp"
              >
                <FaJava />
                <p>Java</p>
              </a>
            </div>
            <div className="col-lg-1 col-md-1 col-3 text-center py4 text-primary">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.ultramsg.com/?docs_tab=csharp-restsharp"
              >
                <FaWindows />
                <p>.Net</p>
              </a>
            </div>
            <div className="col-lg-1 col-md-1 col-3 text-center py4 text-primary">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.ultramsg.com/?docs_tab=java-okhttp"
              >
                <DiAndroid />
                <p>Android</p>
              </a>
            </div>
            <div className="col-lg-1 col-md-1 col-3 text-center py4 text-primary">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.ultramsg.com/"
              >
                <DiApple />
                <p>IOS</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Features />
      <WhatsAppApi />
      <SEO />
      <Tutorials />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
