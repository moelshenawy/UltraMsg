import React from "react";
import "./index.scss";
import blogsData from "../../data/blog/blog.json";
import { BsFillTagsFill } from "react-icons/bs";
import { images } from "../../constants";
import BlogNavbar from "./BlogNavbar";
import { Link } from "react-router-dom";

const Blog = () => {
  const { blogDetails } = blogsData;

  return (
    <>
      <BlogNavbar />
      <div id="blog" className="position-relative">
        <div className="landing-blog container">
          <div className="blog-content mt-5">
            <h2 className="blog-heading">The Ultimate Guide to WhatsApp API</h2>
            <p className="blog-p">
              Friendly UI and easy API, Ultramsg is not just a message
            </p>
          </div>
        </div>

        <div className="blog-cards position-absolute">
          {blogDetails.map((blog) => (
            <div className="card" key={blog.title}>
              <div className="card-content">
                <div className="card-img">
                  <img src={images.blog0} alt={blog.title} />
                </div>

                <div className="card-text">
                  <h2>
                    <a href="#">{blog.title}</a>
                  </h2>

                  <div className="card-btn">
                    <Link to={`/BlogDetails/${blog.id}`}>
                      <button>Read More</button>
                    </Link>
                  </div>

                  <div className="tags">
                    <span>
                      <BsFillTagsFill />
                      {blog.tags.map((tag) => (
                        <a href="">{tag}</a>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
