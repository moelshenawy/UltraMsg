import React from "react";
import "./index.scss";
import { images } from "../../constants";
import { useTranslation } from "react-i18next";
import { FaUserAlt, FaLock, FaSignInAlt } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const SignIn = ({ getUserData }) => {
  let [errorList, setErrorList] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  let [user, setUser] = useState({ email: "", password: "" });
  let route = useNavigate();
  const { t, i18n } = useTranslation();
  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const getUser = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };

  const validationForm = () => {
    let scheme = Joi.object({
      email: Joi.string().email({ tlds: { allow: ["com", "net", "org"] } }),
      password: Joi.string().pattern(new RegExp("^[A-Z][a-z]{2,8}$")),
    });

    return scheme.validate(user, { abortEarly: false });
  };

  const submitForm = async (e) => {
    e.preventDefault(); // prevent Reload
    setLoading(true);

    let validationResponse = validationForm();

    if (validationResponse.error) {
      // Validation Has Error
      setErrorList(validationResponse.error.details);
      setLoading(false);
    } else {
      let { data } = await axios.post(
        `https://route-egypt-api.herokuapp.com/signin`,
        user
      );
      if (data.message === "success") {
        localStorage.setItem("userToken", data.token);
        getUserData();
        route("/");
        setLoading(false);

        // Go To Login Page
      } else {
        setLoading(false);
        setError(data.message);
      }
    }
  };

  return (
    <>
      <div className="content  d-flex justify-content-center align-items-center">
        <form className="signin-form" id="signin-form" onSubmit={submitForm}>
          <div className="card mb-0">
            <div className="card-body">
              <div className="text-center mb-3">
                <img src={images.logo} alt="logo" className="pt-4 pb-4 w-50" />
                <h5 className="mb-0">{t("SignIn.1")}</h5>
                <h1 className="d-block text-muted h6">{t("SignIn.2")}</h1>
              </div>

              <div className="form-group text-center order-lg-1">
                <select
                  className="selections  btn btn-light  w-100"
                  onChange={handleChange}
                >
                  <option defaultValue="en" value="en">
                    English
                  </option>
                  <option value="ar">العربية</option>
                </select>
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder={t("SignIn.3")}
                  onChange={getUser}
                />
                <div className="icon text-muted">
                  <FaUserAlt />
                </div>
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder={t("SignIn.4")}
                  onChange={getUser}
                  name="password"
                />
                <div className="icon text-muted">
                  <FaLock />
                </div>
              </div>

              <div className="form-group d-flex align-items-center">
                <a href="#" className="ms-auto">
                  {t("SignIn.5")}
                </a>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-block disabledUntilReady"
                  name="signin"
                >
                  {loading ? (
                    <Spinner animation="border" role="status" />
                  ) : (
                    t("SignIn.6")
                  )}
                </button>
              </div>

              {error && <div className="alert alert-danger">{error}</div>}
              {errorList.map((err, idx) =>
                idx === 1 ? (
                  <div className="alert p-2 alert-danger" key={idx}>
                    Password invalid
                  </div>
                ) : (
                  <div className="alert p-2 alert-danger" key={idx}>
                    {err.message}
                  </div>
                )
              )}
              <div className="form-group">
                <a href="signup" className="btn w-100 btn-light btn-block">
                  {t("SignIn.7")}
                </a>
              </div>

              <div className="form-group text-center text-muted content-divider">
                <span className="px-2">{t("SignIn.7")}</span>
              </div>

              <div className="form-group">
                <a href="signup" className="btn btn-light btn-block w-100">
                  {t("SignIn.8")}
                </a>
              </div>

              <span className="form-text text-center text-muted">
                {t("SignIn.9")}
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
