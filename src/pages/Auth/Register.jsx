import React from "react";
import Style from "./Auth.module.css";
import { Link } from "react-router-dom";
import gbr from "../../assets/logo/logo.png";

const Register = () => {
  return (
    <>
      <div className={`container ${Style.cat} cat `}>
        <img className={` ${Style.logo} img `} src={gbr} alt="" />
        <h1 className={`container ${Style.img} img `}>Register</h1>
        <p className="text-center py-3">Please sign up with your account</p>
        <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist"></ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div className="form-group">
              <input className="form-control  " type="name" name="Name" id="name" placeholder="Name" onChange="" />
            </div>
            <div className="form-group">
              <input className="form-control" type="Nim" name="Nim" id="Nim" placeholder="Nim" onChange="" />
            </div>
            <div className="form-group">
              <input className="form-control" type="email" name="email" id="email" placeholder="Email" onChange="" />
            </div>
            <div className="form-group">
              <input className="form-control" type="password" name="password" id="password" placeholder="Password" onChange="" />
            </div>
            <div className="form-group">
              <button className={`${Style.btnlog} btnlog  btn btn-block rounded-pill buton text-white  `} onClick="">
                Register
              </button>
            </div>

            <p className="text-regis float-right ">
              Don't have Perpustakaan account?
              <Link to="/login" className="text-danger">
                <spam> Login</spam>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
