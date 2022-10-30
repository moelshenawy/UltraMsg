import React, { useEffect, useState } from "react";
import { Home, Blog, SignIn, SignUp, NotFound } from "./components";
import { BiArrowFromBottom } from "react-icons/bi";
import { Navigate, Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import BlogFaq from "./Layout/Blogs/BlogFaq";
import BlogDetails from "./components/Blog/BlogDetails";
import jwtDecode from "jwt-decode";

function App() {
  const [isVisable, setisVisable] = useState(false);
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const getUserData = () => {
    const encodedToken = localStorage.getItem("userToken");

    const decodedToken = jwtDecode(encodedToken);

    setUserData(decodedToken);

    console.log(decodedToken);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setisVisable(true);
    } else {
      setisVisable(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      getUserData();
    }
  }, []);

  const logOut = () => {
    setUserData(null);
    localStorage.removeItem("userToken");
    navigate("/signin");
  };

  return (
    <>
      <main className="">
        <Routes>
          <Route
            path="/"
            element={<Home userData={userData} logOut={logOut} />}
          />
          <Route path="blog" element={<Blog />} />
          <Route path="blog-faq" element={<BlogFaq />} />
          <Route path="signin" element={<SignIn getUserData={getUserData} />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="BlogDetails" element={<BlogDetails />}>
            <Route path=":id" element={<BlogDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

        <div
          className={`to-top  ${
            isVisable ? "opacity-100" : "opacity-0 d-none"
          }`}
        >
          <button type="button" onClick={scrollToTop}>
            <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
