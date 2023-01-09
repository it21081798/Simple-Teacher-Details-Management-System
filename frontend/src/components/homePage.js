import React from "react";
import { Link } from "react-router-dom";
import home2 from "../images/home2.png";

const mainDivHome={
    marginRight: "auto",
    marginLeft: "auto",
    textAlign: "center"
}

const homeTopic={
    color: "white",
    fontSize: "80px",
    marginTop: "-500px"
}

const homeLoginBtn={
    marginTop: "100px",
    fontSize: "30px",
    borderRadius: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight: "20px",
    paddingLeft: "20px"
}

function homePage() {
  return (
      <div style={mainDivHome}>
        <img src={home2} style={{width: "100%"}} alt="home"/>
        <h1 style={homeTopic}>Welcome to DAKMA</h1>
        <Link to="/addTeacher">
          <button className="btn btn-success" style={homeLoginBtn}>Login Here</button>
        </Link>
      </div>
  );
}

export default homePage;
