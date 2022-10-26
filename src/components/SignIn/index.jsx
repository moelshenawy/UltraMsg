import React from "react";
import "./index.scss";
import { images } from "../../constants";
import { useTranslation } from "react-i18next";
import { FaUserAlt, FaLock, FaSignInAlt } from "react-icons/fa";
const SignIn = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <>
      <div className="content  d-flex justify-content-center align-items-center">
        <form className="signin-form" id="signin-form">
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
                  type="text"
                  placeholder={t("SignIn.3")}
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
                  {t("SignIn.6")}

                  <FaSignInAlt />
                </button>
              </div>

              <div className="form-group">
                <a href="signup.php" className="btn w-100 btn-light btn-block">
                  {t("SignIn.7")}
                </a>
              </div>

              <div className="form-group text-center text-muted content-divider">
                <span className="px-2">{t("SignIn.7")}</span>
              </div>

              <div className="form-group">
                <a href="signup.php" className="btn btn-light btn-block w-100">
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
