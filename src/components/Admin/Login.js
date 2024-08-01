import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import '../../utils/login.css'

const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const {login,error,isLoading} = useLogin()

    const handleSubmit =async(e)=>{
        e.preventDefault()
        await login(username,password)
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log in </h3>
            <label >Username:</label>
            <input 
            type="text" 
            name="username"
            onChange={(e)=>setUsername(e.target.value)}
            value={username}
            />
            <label >Password:</label>
            <input 
            type="password" 
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            />
            {error && <div className="error">{error}</div>}
            <button className="tw-w-full"disabled={isLoading}>Log in</button>
            
        </form>
    );
}
 
export default Login;