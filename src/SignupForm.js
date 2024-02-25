// // SignupForm.js
// import React, { useState } from 'react';

// const SignupForm = ({ toggleForm }) => {
//     const [name, setName] = useState('');
//     const [number, setNumber] = useState('');
//     const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your signup logic here
//     console.log('Signing up with:', email, password);
//   };

//   return (
//     <div>
//       <h2>Sign up</h2>
//       <form onSubmit={handleSubmit}>
//       <input type="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
//       <input type="number" placeholder="Mobile Number" value={number} onChange={(e) => setNumber(e.target.value)} />
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Sign up</button>
//       </form>
//       <p>Already have an account? <span onClick={toggleForm}>Login</span></p>
//     </div>
//   );
// };

// export default SignupForm;
