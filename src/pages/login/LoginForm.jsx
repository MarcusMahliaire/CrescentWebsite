import React, { useState } from 'react'

function LoginForm({Login, error}) {
  const [details, setDetails] = useState({email: "", password: ""});

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Welcome to Wheat Grass!</h2>
        {(error !== "") ? (<div className="error">{error}</div>) : ""}
        <div className="form-group">
            <label htmlFor="email">email: </label>
            <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="password"  name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
        </div>
        <div id="btn">
        <button type="submit" value="Login">Log in</button>
        </div>
      </div>
    </form>
  )
}

export default LoginForm