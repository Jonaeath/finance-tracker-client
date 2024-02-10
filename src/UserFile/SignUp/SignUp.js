import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider";

const SignUp = () => {

const {createUser} = useContext(authContext);
const navigate = useNavigate();

  const handelSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          alert("Your SignUp Complete Successfully");
          form.reset();
          navigate('/signup')
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="hero w-full ml-10 my-10">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100 my-10 pb-10">
          <form onSubmit={handelSignUp} className="card-body">
            <div className="form-control">
              <h1 className="text-4xl text-center uppercase font-bold">
                Login!
              </h1>
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
              <input
                className="btn btn-primary uppercase"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center">
            Start up for New-
            <Link className="text-orange-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
