// import React, { useState } from 'react';
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';

// const App = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div>
//       {isLogin ? <LoginForm toggleForm={toggleForm} /> : <SignupForm toggleForm={toggleForm} />}
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({ username: '', email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", loginData);
    setIsLoggedIn(true);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with:", signupData);
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <div className="forms-container">
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
              />
              <button type="submit">Login</button>
            </form>
          </div>
          <div className="signup-form">
            <h2>Signup</h2>
            <form onSubmit={handleSignupSubmit}>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={signupData.username}
                onChange={handleSignupChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={signupData.email}
                onChange={handleSignupChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={signupData.password}
                onChange={handleSignupChange}
              />
              <button type="submit">Signup</button>
            </form>
          </div>
        </div>
      ) : (
        <h2>Welcome, {loginData.username}!</h2>
      )}
    </div>
  );
}

export default App;
