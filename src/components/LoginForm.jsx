import { useState, useContext, useEffect} from "react";
import LogoInstagram from '../assets/logo-instagram.png'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { LocalStorageContext } from "../context/LocalStorageContext";

function LoginForm(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState(null);
    const [error, setError] = useState("");

    useEffect ( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setUsers(users))
    }, [])

    const {
        setLocalStorageValue,
    } = useContext(LocalStorageContext)
    

    const {
        setUserId,
        setUser,
      } = useContext(UserContext);
   
    const navigate = useNavigate();

    const emailChange = (e) => {
        setEmail(e.target.value);
        setError('')
    };

    const userNameChange = (e) => {
        setUsername(e.target.value);
        setError('')
    };

    const validateUser = () => {
        const user = users.find((user) => user.username === username);
        if (!user){
            setError("User not found");
            return;
        }

        if(user.email !== email){
            setError("Incorrect password");
            return;
        }
        
        setUserId(user.id);
        setUser(user);
        setLocalStorageValue("userId", user.id);
        setLocalStorageValue("user", JSON.stringify(user));
        navigate(`/dasboard`);


        console.log(email)
    };
    
    //useEffect
    return(
        <div className="flex flex-col items-center justify-center flex-grow">
            <div className="border border-gray-200 bg-white shadow-md rounded flex flex-col px-8 py-6 mb-4 w-80">
                <picture className="flex justify-center mb-4">
                    <img src={LogoInstagram} alt="login" className="h-32" />
                </picture>
                <div className="text-red-600">{error}</div>
                
                <input
                    className="p-2 my-2 border bg-slate-100 border-gray-200 rounded text-sm"
                    type="text"
                    placeholder="Telephone, or email"
                    value={email}
                    onChange={emailChange}
                />
                <input
                    className="p-2 my-2 border bg-slate-100 border-gray-200 rounded text-sm"
                    type="password"
                    placeholder="Username"
                    value={username}
                    onChange={userNameChange}
                />
                <button
                    className="bg-blue-400 text-white font-bold py-2 px-4 rounded-xl mt-4"
                    type="button"
                    onClick={validateUser}
                >
                    Sign in
                </button>
                <button className="text-sm text-center mt-4">
                    ¿Did you forget your password?{" "}
                </button>
            </div>
            <div className="border border-gray-200 bg-white shadow-md rounded flex flex-col px-8 py-6 w-80">
                <p className="text-sm text-center">
                    ¿Don't have an account?{" "}
                    <span className="text-blue-400">sign up</span>
                </p>
            </div> 
        </div>
    )
}

export default LoginForm;