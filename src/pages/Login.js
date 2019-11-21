import React from "react";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("default");
  const [isMember, setIsMember] = React.useState(true);
  // empty form fields
  let isEmpty = !email || !password || !username;
  // handle member
  const toggleMember = () => {
    setIsMember(prevMember => {
      let isMember = !prevMember;
      isMember ? setUsername("default") : setUsername("");
      return isMember;
    });
  };

  const handleSubmit = async () => {
    let user;
  };

  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? "sign in" : "register"}</h2>
      <form className="login-form">
        {/* single input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        {/*end of single input */}
        {/* single input */}

        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {/*end of single input */}

        {/* single input */}
        {!isMember && (
          <div className="form-control">
            <label html="username">username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
        )}

        {/*end of single input */}
        {/* empty form text */}
        {isEmpty && (
          <p className="form-empty">please fill out all form fields</p>
        )}

        {/* submit btn */}
        <button
          type="submit"
          className="btn btn-block btn-primary"
          disabled={isEmpty}
          onClick={handleSubmit}
        >
          submit
        </button>
        {/* register link */}
        <p className="register-link">
          {isMember ? "need to register?" : "already a member?"}
          <button type="button" onClick={toggleMember}>
            click here
          </button>
        </p>
      </form>
    </section>
  );
}
