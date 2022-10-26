import React, { useState } from "react";
import { images } from "../../constants";
import { useTranslation } from "react-i18next";
import { FaUserAlt, FaSignInAlt, FaLock } from "react-icons/fa";
import ReactFlagsSelect from "react-flags-select";
import PhoneInput from "react-phone-number-input";
import "./index.scss";
const SignUp = () => {
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState();

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
                <h5 className="mb-0">{t("SignUp.Header")}</h5>
                <h1 className="d-block text-muted h6">{t("SignUp.Create")}</h1>
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
                  placeholder={t("SignUp.FirstName")}
                />
                <div className="icon text-muted">
                  <FaUserAlt />
                </div>
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder={t("SignUp.LastName")}
                />
                <div className="icon text-muted">
                  <FaUserAlt />
                </div>
              </div>

              <div className="form-group">
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                />
              </div>

              <div className="form-group">
                <div className="input-group">
                  <PhoneInput
                    international
                    defaultCountry="EG"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder={t("SignUp.Email")}
                />
                <div className="icon text-muted">
                  <FaUserAlt />
                </div>
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder={t("SignUp.Password")}
                />
                <div className="icon text-muted">
                  <FaLock />
                </div>
              </div>

              <div className="form-group">
                <div class="form-check text-center">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    {t("SignUp.Terms")}
                  </label>
                </div>
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-primary btn-block disabledUntilReady"
                  name="sign-up"
                >
                  {t("SignUp.SignUp")}
                  <FaSignInAlt />
                </button>
              </div>

              <div class="form-group text-center text-muted content-divider">
                <span class="px-2">{t("SignUp.Ask")}</span>
              </div>

              <div className="form-group">
                <a href="/" className="btn btn-light btn-block w-100">
                  {t("SignUp.SignIn")}
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
