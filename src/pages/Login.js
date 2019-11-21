import React from "react";

export default function Login() {
  return (
    <section className="form">
      <h2 className="section-title">sign in</h2>
      <form className="login-form">
        {/* single input */}
        <div className="form-control">
          <label for="email">email</label>
          <input type="email" id="email" />
        </div>
        {/*end of single input */}
        {/* single input */}

        <div className="form-control">
          <label for="password">password</label>
          <input type="password" id="password" />
        </div>
        {/*end of single input */}

        {/* single input */}

        <div className="form-control">
          <label for="username">username</label>
          <input type="text" id="username" />
        </div>
        {/*end of single input */}
        {/* empty form text */}
        <p className="form-empty">please fill out all form fields</p>
        {/* submit btn */}
        <button type="submit" className="btn btn-block btn-primary">
          submit
        </button>
        {/* register link */}
        <p className="register-link">
          need to register?
          <button type="button">click here</button>
        </p>
      </form>
    </section>
  );
}
