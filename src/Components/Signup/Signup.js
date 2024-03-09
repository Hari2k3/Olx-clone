import React,{useState,useContext} from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export default function Signup() {
  const history=useHistory()
  const [username,setUsername] = useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');
  const {firebase}=useContext(FirebaseContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
      // 'result.user' contains the user information
  
      await result.user.updateProfile({ displayName: username });
      // User profile updated successfully
  
      // Add user data to Firestore
      await firebase.firestore().collection('users').add({
        id: result.user.uid,
        username: username,
        phone: phone
      });
  
      // Redirect to login page
      history.push("/login");
    } catch (error) {
      // Handle errors
      console.error('Error creating user:', error.message);
    }
  };
  
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            val={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            val={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            val={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            val={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
