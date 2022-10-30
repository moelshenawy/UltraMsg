import React from "react";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  console.log(props);
  let route = useNavigate();

  if (localStorage.getItem("userToken")) {
    if (props.loginUser) {
      return (
        <Route path={props.p}>
          <props.element loginUser={props.loginUser} />
        </Route>
      );
    }
    return (
      <Route path={props.path}>
        <props.element />
      </Route>
    );
  } else {
    return route("/login");
  }
};

export default ProtectedRoute;
