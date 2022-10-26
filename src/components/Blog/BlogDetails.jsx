import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../Layout/Footer-blog/Footer";
import BlogNavbar from "./BlogNavbar";
import axios from "axios";
import { images } from "../../constants";
import blogsData from "../../data/blog/blog.json";
import "./BlogDetails.scss";
import { AiFillFolder } from "react-icons/ai";
import { BsFillTagsFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const BlogDetails = () => {
  const [toggle, setToggle] = useState(true);
  const [blogData, setBlogData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const getBlogDetails = async (id) => {
    const { data } = await axios.get(`http://localhost:8000/blogDetails/${id}`);

    setBlogData(data);
  };

  useEffect(() => {
    getBlogDetails(params.id);
  }, []);

  const contents = [
    {
      section: "Chatbot_tasks",
      title: "Chatbot tasks:",
      id: 1,
      lists: [
        "The output of the command list.",
        "The output of the server time of the bot running on.",
        "Sending image to phone number or group.",
        "Sending audio file.",
        "Sending ppt audio recording.",
        "Sending Video File.",
        "Sending contact.",
        "Sending contact.",
        "Sending Random Sentence.",
        "Sending Random Joke.",
        "Sending Random Image.",
      ],
    },
    {
      section: "Dependencies",
      title: "Dependencies:",
      id: 2,
      paragraph:
        "for local development purposes, a tunneling service is required. This example uses ngrok , you can download Ngrok from here.",
    },
    {
      section: "Download_project",
      title: "Download project:",
      id: 3,
      paragraph: "You can download all project files from GitHub.",
    },
    {
      section: "Set_the_instance_ID_and_token",
      title: "Set the instance ID and token",
      id: 4,
      paragraph: "Set the instance ID and token in appsettings.json file.",
    },
    {
      section: "run_project",
      title: "run project",
      id: 5,
      code: "dotnet watch",
    },
    {
      section: "Start_NGROKs",
      title: " Start NGROK",
      id: 6,
      paragraph: "Run NGROK For Windows:",
      code: "ngrok http https://localhost:6000",
      paragraph2: "Run NGROK for mac:",
      code2: "ngrok http https://localhost:6000",
    },
    {
      section: "Set_Webhook_URL",
      title: "Set Webhook URL",
      id: 7,
      paragraph:
        "Go to your ultramsg account to set Webhook URL after copying the ngrok url and add Route like this:",
      code: "https://61-44-136-9.ngrok.io/api/",
      paragraph2: "and enable this option “Webhook on Received”.",
      img: images.apisettings,
    },
    {
      section: "Receive WhatsApp_messages_and_command_processing",
      title: "Receive WhatsApp messages and command processing",
      id: 8,
      paragraph:
        "Congratulations. Now you can try sending to WhatsApp number and testing the WhatsApp chatbot.",
      paragraph2:
        "This is all you need to receive and read messages from users, and then respond to them. You can develop the list and add more complex commands such as querying from Database and updating records in the database etc.",
      paragraph3:
        "This is all you need to receive and read messages from users, and then respond to them. You can develop the list and add more complex commands such as querying from Database and updating records in the database etc.",
    },
  ];

  return (
    <>
      <BlogNavbar />
      <div className="landing-blog">
        <div class="blog-content mt-5">
          <h2 class="blog-heading">{blogData?.title}</h2>
        </div>
      </div>
      <div className="container">
        <div className="card-detail">
          <div className="cards-container">
            <div className="sidebar me-3">
              <div className="sidebar-header">
                <h2>WhatsApp API</h2>
                <div className="sidebar-content">
                  <p>
                    Check out the link below
                    <br />
                    for more information about WhatsApp API.
                  </p>

                  <a
                    href="https://docs.ultramsg.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Documentation
                  </a>
                </div>
              </div>

              <div className="sidebar-recent">
                <h2>Recent Posts</h2>
                <ul>
                  {blogsData.blogDetails.slice(6).map((blog) => (
                    <li key={blog.id}>
                      <a href="#">{blog.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="contest-blog ">
              <div className="image-container">
                <img src={images.blog0} alt={blogData?.title} />
              </div>

              <div className="contents p-4 bg-light">
                <p>
                  Building chatbot is easy with Ultramsg API, you can build a
                  customer service bot and best ai chatbot Through simple steps
                  using the VB.NET.
                </p>
                <div className="contest-container">
                  <div className="contest-head">
                    <b>Contest</b>
                    <span onClick={() => setToggle((prev) => !prev)}>
                      {toggle ? "hide" : "show"}
                    </span>
                  </div>
                  <div className="items">
                    {contents.map((content) => (
                      <div
                        className={`item-box ${toggle ? "d-block" : " d-none"}`}
                      >
                        <a href={`#${content.section}`}>
                          <span className="me-1">{content.id}</span>
                          <span>{content.title}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="article-container">
                {contents.map((content) => (
                  <div className="p-4 bg-light" id={`${content.section}`}>
                    <h2>
                      <span>{content.title}</span>
                    </h2>

                    {content.lists && (
                      <ul className="ms-2">
                        {content.lists.map((list) => (
                          <li>{list}</li>
                        ))}
                      </ul>
                    )}

                    {content.paragraph && (
                      <div>
                        <p>{content.paragraph}</p>
                        <p>{content.paragraph2}</p>
                        <p>{content.paragraph3}</p>
                      </div>
                    )}

                    {content.img && (
                      <div className="image-container">
                        <img src={content.img} />
                      </div>
                    )}

                    {content.code && (
                      <pre>
                        <code>{content.code}</code>
                        <code>{content.code2}</code>
                      </pre>
                    )}
                  </div>
                ))}
              </div>
              <div className="footer p-4 bg-light">
                <div className="whatsapp d-flex">
                  <span className="me-1">
                    <AiFillFolder />
                  </span>
                  <p>
                    <a href="#">WhatsApp API</a>
                  </p>
                </div>

                <div className="tags d-flex">
                  <span className="me-1">
                    <BsFillTagsFill />
                  </span>
                  <p>
                    <a href="#" rel="tag">
                      chatbot
                    </a>
                    <a href="#" rel="tag">
                      vbnet
                    </a>
                    <a href="#" rel="tag">
                      webhook
                    </a>
                    <a href="#" rel="tag">
                      WhatsApp API
                    </a>
                  </p>
                </div>

                <div className="building d-flex">
                  <span className="me-1">
                    <MdOutlineKeyboardArrowLeft />
                  </span>
                  <p>
                    <a href="#">Build a WhatsApp Chatbot using c#</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogDetails;
