import React from "react";
import "../css/All-style.css";

function Home(props) {
  return (
    <>
      <div className="home-div">
        <h1 data-text={props.h1}>{props.h1}</h1>
        <h2>{props.p}</h2>
      </div>
    </>
  );
}

export default Home;
