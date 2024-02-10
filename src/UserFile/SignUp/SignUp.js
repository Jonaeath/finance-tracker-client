import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
      <div className="hero w-full ml-10 my-10">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100 my-10 pb-10">
          <form className="card-body">
          <div className="form-control">
              <h1 className="text-4xl text-center uppercase font-bold">Login!</h1>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
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
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary uppercase" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="text-center">
            Start up for New- 
            <Link className="text-orange-600 font-bold" to="/signup">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;