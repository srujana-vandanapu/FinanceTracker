import React from "react";
import Layout from "../Navbar/Layout";
import "../Home/Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <Layout>
      <div className="home">
        <div className="home-left">
          <div className="home-head">
            Hello,
            <span style={{ color: "#913ce1" }}> User</span>
          </div>

          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            exercitationem delectus illum hic eaque facere corporis laborum
            quaerat blanditiis, nesciunt nostrum, dolor voluptates molestiae
            voluptatum fugit a, iste nam assumenda? Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>

          <div className="buttons-div">
            <button className="btn-1">
              <Link className="links" to="/income">
                INCOME
              </Link>
            </button>
            <button className="btn-2">
              <Link className="link" to="/expenditure">
                EXPENDITURE
              </Link>
            </button>
          </div>
          <div className="home-savings">Total Savings : 9,989/- </div>
        </div>
        <div className="home-right">
          <div className="home-right-img"></div>
        </div>
      </div>
    </Layout>
  );
}
