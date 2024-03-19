import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Notfound = () => {
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      nav("/", { state: "lol" });
      //nav(-1); // back button
    }, 2000);
  }, []);

  return <h1>No Found</h1>;

  // return <Navigate to="/"></Navigate>;
};

export default Notfound;
