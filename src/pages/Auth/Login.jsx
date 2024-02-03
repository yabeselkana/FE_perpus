import React from "react";
import Style from "./Auth.module.css";
import { Link } from "react-router-dom";

import gbr from "../../assets/logo/logo.png";
const Login = () => {
  return (
    <>
      <div className={`container ${Style.cat} cat `}>
        <img className={` ${Style.logo} img `} src={gbr} alt="" />
        <h3 className={`container ${Style.img} img `}>Login</h3>
        <p className="text-center py-3">Please sign up with your account</p>
        <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist"></ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div className="form-group">
              <input className="form-control  " type="email" name="email" id="email" placeholder="Email" onChange="" />
            </div>
            <div className="form-group">
              <input className="form-control" type="password" name="password" id="password" placeholder="Password" onChange="" />
            </div>
            <div className="form-group">
              <button className={`${Style.btnlog} btnlog  btn btn-block rounded-pill buton text-white  `} onClick="">
                Login
              </button>
            </div>

            <p className="text-regis float-right ">
              Don't have Perpustakaan account?
              <Link to="/Register" className="text-danger">
                <spam> Register</spam>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
