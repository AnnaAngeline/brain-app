// // LoginForm.js
// import React, { useState } from 'react';

// const LoginForm = ({ toggleForm }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//     console.log('Logging in with:', email, password);
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? <span onClick={toggleForm}>Sign up</span></p>
//     </div>
//   );
// };

// export default LoginForm;