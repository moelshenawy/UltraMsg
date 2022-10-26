import React, { useEffect, useState } from "react";

import { Home, Blog, SignIn, SignUp, NotFound } from "./components";
import "./App.scss";
import { BiArrowFromBottom } from "react-icons/bi";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import BlogFaq from "./Layout/Blogs/BlogFaq";
import BlogDetails from "./components/Blog/BlogDetails";

function App() {
  const [isVisable, setisVisable] = useState(false);

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

  return (
    <>
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog-faq" element={<BlogFaq />} />
          <Route path="signin" element={<SignIn />} />
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
