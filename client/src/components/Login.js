import React,{useState,useEffect} from "react";
import axios from 'axios';

const Login = (props) => {
  const [login,setLogin]=useState({
    username:'',
    password:''
});
const handleChange=e=>{
  setLogin({
      ...login,
      [e.target.name]:e.target.value
  })
}
const LoginSubmit=e=>{
  e.preventDefault();
  axios.post('http://localhost:5000/api/login', login)
  .then(res=>{
      localStorage.setItem('token',res.data.payload);
      props.history.push("/BubblePage");
  })
}
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={LoginSubmit}>
        <input name="username" type="text" placeholder = 'username' onChange={handleChange} id="username"/>
        <input name="password" type="password" placeholder = 'Password' onChange={handleChange} id="password"/>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
