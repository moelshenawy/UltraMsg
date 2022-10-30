import React from "react";
import { useTranslation } from "react-i18next";
import { images, navLinks } from "../../constants";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = ({ userData, logOut }) => {
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const navLinks = [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "whatsapp-api",
      title: "WHATSAPP API",
    },
    {
      id: "blog",
      title: "Blog",
    },
    {
      id: "tutorials",
      title: "TUTORIALS",
    },
    {
      id: "faq",
      title: "FAQ",
    },
    {
      id: "signin",
      title: "Sign In",
    },
  ];

  return (
    <>
      <nav id="#topnav" className="navbar fixed-top navbar-expand-lg">
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
              {/* {navLinks.map((nav, idx) => (
                <li className="nav-item" key={nav.id}>
                  {nav.id === "whatsapp-api" ||
                  nav.id === "tutorials" ||
                  nav.id === "faq" ? (
                    <a className="nav-link p-2 p-lg-3" href={`#${nav.id}`}>
                      {t(`Nav.${idx + 1}`)}
                    </a>
                  ) : (
                    <NavLink className="nav-link p-2 p-lg-3" to={`${nav.id}`}>
                      {t(`Nav.${idx + 1}`)}
                    </NavLink>
                  )}
                </li>
              ))} */}

              <li className="nav-item">
                <a className="nav-link p-2 p-lg-3" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link p-2 p-lg-3" href="#whatsapp-api">
                  WhatsApp API
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link p-2 p-lg-3" href="/blog">
                  Blog
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link p-2 p-lg-3" href="#tutorials">
                  TUTORIALS
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link p-2 p-lg-3" href="#faq">
                  FAQ
                </a>
              </li>
              {userData ? (
                <>
                  <li className="nav-item" onClick={logOut}>
                    <a className="nav-link p-2 p-lg-3" href="/signin">
                      Log Out
                    </a>
                  </li>
                  <li className="nav-item">
                    <span className="p-2 p-lg-3 text-center text-primary">
                      {userData.first_name} {` `}
                      {userData.last_name}
                    </span>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <a className="nav-link p-2 p-lg-3" href="/signin">
                    SIGN IN
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
