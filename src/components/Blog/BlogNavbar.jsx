import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { images } from "../../constants";
const BlogNavbar = () => {
  const blogNavLinks = [
    {
      id: "/",
      title: "HOME",
    },
    {
      id: "/blog",
      title: "BLOG",
    },
    {
      id: "blog-faq",
      title: "FAQ",
    },
    {
      id: "videos",
      title: "VIDEOS",
    },
    {
      id: "/signin",
      title: "SIGN IN",
    },
    {
      id: "/signup",
      title: "SIGN UP",
    },
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <nav
      id="#topnav"
      className="navbar navbar-light d-flex justify-content-around  fixed-top navbar-expand-lg"
    >
      <div className="container">
        <a href="/" className="navbar-brand ">
          <img src={images.logoLight} alt="logo" />
        </a>

        <div className="options order-lg-1 me-md-3">
          <select className="selections" onChange={handleChange}>
            <option defaultValue="en" value="en">
              English
            </option>
            <option value="ar">العربية</option>
            <option value="es">español</option>
            <option value="pt">Português</option>
            <option value="ru">Türkçe</option>
            <option value="tr">русский</option>
          </select>
        </div>

        <button
          className="navbar-toggler
          ms-sm-3
          "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main"
          aria-controls="main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>

        <div className="collapse navbar-collapse" id="main">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            {blogNavLinks.map((nav, idx) => (
              <li className="nav-item" key={idx}>
                {nav.id === "/" ||
                nav.id === "/blog" ||
                nav.id === "blog-faq" ||
                nav.id === "/signin" ||
                nav.id === "/signup" ? (
                  <a className="nav-link p-2 p-lg-3" href={nav.id}>
                    {nav.title}
                  </a>
                ) : (
                  <a className="nav-link p-2 p-lg-3" href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BlogNavbar;
