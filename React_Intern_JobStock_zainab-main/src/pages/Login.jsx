import React from 'react';
import ReactDOM from 'react-dom';
import logo from "./../img/logo.png";
const Login =() =>{
    return (
        <>
        <section className="login-plane-sec">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-md-offset-3">
							<div className="login-panel panel panel-default">
								<div className="panel-heading">
									<h3 className="panel-title">Create An Account</h3>
								</div>
								<div className="panel-body">
									<img src= {logo} class="img-responsive" />
									<form role="form">
										<fieldset>
											<div className="form-group">
												<input className="form-control" placeholder="E-mail" name="email" type="email" autofocus/>
											</div>
											<div className="form-group">
												<input className="form-control" placeholder="Password" name="password" type="password" value=""/>
											</div>
											<div className="checkbox">
												<label>
													<input name="remember" type="checkbox" value="Remember Me"/>Remember Me
												</label>
											</div>
											//Change this to a button or input when using this as a form 
											<a href="index-2.html" class="btn btn-login">Sign Up</a>
										</fieldset>
									</form>
									<ul className="social-login">
										<li className="facebook-login"><a href="#"><i className="fa fa-facebook"></i>Facebook</a></li>
										<span>OR</span>
										<li className="google-plus-login"><a href="#"><i className="fa fa-google-plus"></i>Facebook</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    )
}
export default Login