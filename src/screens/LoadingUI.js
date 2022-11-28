import React from "react";
import Loader from "react-loader-spinner";
import "./LoadingUI.css";

const LoadingScreen = () => {
  return (
    <div className="loading">
      <h1 className="blue" style={{ fontSize: "5rem" }}>
        <b>Kwizz</b>app
      </h1>
       <Loader color="#353b44" width={130} height={130} type="Bars" />
    </div>
  );
};
export default LoadingScreen;
