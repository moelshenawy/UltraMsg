import React, { useState } from "react";
import { images } from "../../constants";
import { useTranslation } from "react-i18next";
import { FaUserAlt, FaSignInAlt, FaLock } from "react-icons/fa";
import ReactFlagsSelect from "react-flags-select";
import PhoneInput from "react-phone-number-input";
import "./index.scss";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import Spinner from "react-bootstrap/Spinner";

const SignUp = () => {
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState();
  const [error, setError] = useState("");
  const [errorList, setErrorList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { t, i18n } = useTranslation();
  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const getUser = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    let validationRes = validationForm();
    // Check if Input is valid
    if (validationRes.error) {
      // push error to error List Array
      setErrorList(validationRes.error.details);

      setIsLoading(false);
    } else {
      setIsLoading(false);

      // Send data to api
      const { data } = await Axios.post(
        `https://route-egypt-api.herokuapp.com/signup`,
        user
      );

      if (data.message === "success") {
        // TODOS: navigate user to login
        navigate("/signin");
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setError(data.message);
      }
    }
  };

  const validationForm = () => {
    let scheme = Joi.object({
      first_name: Joi.string().min(3).max(16).required(),
      last_name: Joi.string().min(3).max(16).required(),
      password: Joi.string()
        .pattern(new RegExp("^[A-Z][a-z]{3,10}$"))
        .required(),
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net", "org"] } })
        .required(),
    });

    return scheme.validate(user, { abortEarly: false });
  };

  return (
    <>
      <div className="content  d-flex justify-content-center align-items-center">
        <form className="signin-form" id="signin-form" onSubmit={submitForm}>
          <div className="card mb-0">
            <div className="card-body">
              <div className="text-center mb-3">
                <img src={images.logo} alt="logo" className="pt-4 pb-4 w-50" />
                <h5 className="mb-0">{t("SignUp.Header")}</h5>
                <h1 className="d-block text-muted h6">{t("SignUp.Create")}</h1>
              </div>

              <div className="form-group text-center ">
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
                  onChange={getUser}
                  name="first_name"
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
                  onChange={getUser}
                  name="last_name"
                  placeholder={t("SignUp.LastName")}
                />
                <div className="icon text-muted">
                  <FaUserAlt />
                </div>
              </div>

              {/* <div className="form-group">
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                />
              </div> */}

              {/* <div className="form-group">
                <div className="input-group">
                  <PhoneInput
                    international
                    defaultCountry="EG"
                    onChange={getUser}
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                  />
                </div>
              </div> */}

              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  onChange={getUser}
                  placeholder={t("SignUp.Email")}
                  name="email"
                />
                <div className="icon text-muted">
                  <FaUserAlt />
                </div>
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  onChange={getUser}
                  name="password"
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
                >
                  {isLoading ? (
                    <Spinner animation="border" role="status" />
                  ) : (
                    t("SignUp.SignUp")
                  )}
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

              {error && <div className="alert alert-danger">{error}</div>}
              {errorList.map((err, idx) =>
                idx === 2 ? (
                  <div className="alert p-2 alert-danger">Password invalid</div>
                ) : (
                  <div className="alert p-2 alert-danger">{err.message}</div>
                )
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
