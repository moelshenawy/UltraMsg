import React from "react";
import "./Tutorials.scss";
import cardsData from "../../data/tutorials/tutorials.json";
import { TfiAngleRight } from "react-icons/tfi";
import { AiOutlineYoutube } from "react-icons/ai";

const Tutorials = () => {
  const { cards, blogs } = cardsData;

  return (
    <section id="tutorials" className="tutorials-section bg-light pt-5">
      <center>
        <h4 className="tutorials-title mb-5">Tutorials</h4>
      </center>

      <div className="row mx-2">
        {cards.map((card, idx) => (
          <div className="col-md-4 col-12" key={idx}>
            <div className="card shadow rounded border-0 overflow-hidden mb-4 ">
              <div className="card-body">
                <h5>{card.cardName}</h5>
              </div>
              <div className="list-group list-group-flush">
                {card.details.map((detail, idx) => (
                  <a
                    href={detail.link}
                    className="list-group-item list-group-item-action"
                    target="_blank"
                    key={idx}
                    rel="noreferrer"
                  >
                    <TfiAngleRight class="me-1" />
                    {detail.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mx-2">
        {blogs.map((blog) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
            <div className="card blog rounded border-0 shadow overflow-hidden">
              <div className="position-relative">
                <div className="embed-responsive embed-responsive-21by9">
                  <iframe
                    title={blog.title}
                    className="embed-responsive-item "
                    src={blog.src}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="card-body p-2">
                <div className="card-title title text-dark">
                  {blog.blogTitle}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="card-body text-center">
          <a
            href="https://www.youtube.com/channel/UCpY6tK4o34GhnPOgQemRT-g"
            className="btn btn-danger"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineYoutube />
            See More videos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
