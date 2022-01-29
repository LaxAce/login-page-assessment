import img from "./img/clip-message-sent 1.png";

function App() {
  return (
    <div className="App">
      <div className="login-container">
        <h1>Digital</h1>
        <h2>Artificial Intelligence Driving Results For The Travel Industry</h2>
        <p>Welcome back! Please login to your account.</p>
        <form>
          <div className="text-wrapper email-wrapper">
            <input
              type="text"
              name="email"
              autoComplete="off"
              autoCapitalize="off"
              required
            />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="text-wrapper password-wrapper">
            <input
              type="password"
              name="password"
              autoComplete="off"
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="remember-forgot-wrapper">
            <div className="remember-me">
              <input type="checkbox" />
              <span>Remember Me</span>
            </div>
            <p>
              <a href="#">Forgot Password?</a>
            </p>
          </div>
          <div className="btn-wrapper">
            <button type="submit" className="btn btn-login">
              Login
            </button>
            <a href="#" className="btn btn-signup">
              Sign Up
            </a>
          </div>
        </form>
        <div className="options">
          <p>Or login with</p>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Google</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="illustrator-container">
        <img src={img} alt="message sent"></img>
      </div>
    </div>
  );
}

export default App;
