import React from "react";
import './Style.css';

const Form = () => {
    return(
<>
	<a href="https://front.codes/" className="logo" target="_blank" >
    <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
</a>

<div className="section">
    <div className="container">
        <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                    <h6 className="mb-0 pb-3 text-light"><span>Log In </span><span>Sign Up</span></h6>
                      <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                      <label for="reg-log"></label>
                    <div className="card-3d-wrap mx-auto">
                        <div className="card-3d-wrapper">
                            <div className="card-front">
                                <div className="center-wrap">
                                    <div className="section text-center">
                                        <h4 className="mb-4 pb-3 text-light">Log In</h4>
                                        <div className="form-group">
                                            <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                                            <i className="input-icon uil uil-at"></i>
                                        </div>	
                                        <div className="form-group mt-2">
                                            <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                            <i className="input-icon uil uil-lock-alt"></i>
                                        </div>
                                        <a href="#" className="btn mt-4 text-light">submit</a>
                                        <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                                      </div>
                                  </div>
                              </div>
                            <div className="card-back">
                                <div className="center-wrap">
                                    <div className="section text-center">
                                        <h4 className="mb-4 pb-3 text-light">Sign Up</h4>
                                        <div className="form-group">
                                            <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autocomplete="off" />
                                            <i className="input-icon uil uil-user"></i>
                                        </div>	
                                        <div className="form-group mt-2">
                                            <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                                            <i className="input-icon uil uil-at"></i>
                                        </div>	
                                        <div className="form-group mt-2">
                                            <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                            <i className="input-icon uil uil-lock-alt"></i>
                                        </div>
                                        <a href="#" className="btn mt-4 text-light">submit</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
</div>
</>
    )
}
export default Form;