import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider";

const Login = () => {
  const { login } = useContext(authContext);
  const navigate = useNavigate()
  
  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (login) {
          alert("Your Login Complete Successfully");
          form.reset();
          navigate('/')
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="hero w-full ml-10 my-10">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100 my-10 pb-10">
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <h1 className="text-4xl text-center uppercase font-bold">
                Login!
              </h1>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary uppercase"
                type="submit"
                value="Log In"
              />
            </div>
          </form>
          <p className="text-center">
            Start up for New-
            <Link className="text-orange-600 font-bold" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
