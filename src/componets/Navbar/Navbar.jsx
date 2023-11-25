import React from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <style>
        header {"{"}
        top: 0; position: sticky; background-color:lightblue; transition: background-color 0.2s ease-in-out; z-index: 10;
        {"}"}
        header.scrolled {"{"}
        background-color: lightgray; opacity: 0.98;
        {"}"}
      </style>

      <header>
        <nav className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "auto",
            }}
          >
            <section>
              <div
                className="linkTo"
                style={{
                  alignItems: "center",
                  height: "70px",
                  textAlign: "center",
                  display: "flex",
                }}
              >
                <div>
                  <Link to="/login">
                    <button
                      style={{
                        height: "40px",
                        width: "100px",
                        borderRadius: "10px",
                        border: 0,
                      }}
                    >
                      Login
                    </button>
                  </Link>
                </div>
                <div style={{ margin: "0 10px" }}>
                  <Link to="/register">
                    <button
                      style={{
                        height: "40px",
                        width: "100px",
                        borderRadius: "10px",
                        border: 0,
                      }}
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>

                <div style={{ margin: "0 500px" }}>
                  <Link to="/home">
                    <button
                      style={{
                        height: "40px",
                        width: "100px",
                        borderRadius: "10px",
                        border: 0,
                      }}
                    >
                      Home
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </nav>
      </header>
    </>
  );
};
