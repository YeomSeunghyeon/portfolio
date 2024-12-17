import { useState } from "react";
import { useDispatch } from 'react-redux';
import { login, logout } from './Store';
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const [username, setUsername] = useState('');
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(username));
        navigate('/');
      };
    
 return(
    <div>
       <div className="LoginText">로그인</div> 
       <div className="LoginBox">
        <div className="LoginID">
            아이디
        </div>
        <input
            type="text"
            className="LoginInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /></div>
          <button onClick={handleLogin} className="LoginButton">Login</button>
    </div>
 )
};
export default Login;