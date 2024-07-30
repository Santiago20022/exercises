
import { useEffect, useState } from "react";
import LogoInstagram from "./assets/logo-instagram.png";

function LoginForm(){
    //useEffect
    return(
            <div className="flex flex-col items-center justify-center flex-grow">
            <form className="border border-gray-200 bg-white shadow-md rounded flex flex-col px-8 py-6 mb-4 w-80">
            <picture className="flex justify-center mb-4">
                <img src={LogoInstagram} alt="login" className="h-32" />
            </picture>
            <input
                className="p-2 my-2 border bg-slate-100 border-gray-200 rounded text-sm"
                type="text"
                placeholder="Telephone, username or email"
            />
            <input
                className="p-2 my-2 border bg-slate-100 border-gray-200 rounded text-sm"
                type="password"
                placeholder="Password"
            />
            <button
                className="bg-blue-400 text-white font-bold py-2 px-4 rounded-xl mt-4"
                type="submit"
            >
                Sign in
            </button>
            <button className="text-sm text-center mt-4">
                ¿Did you forget your password?{" "}
            </button>
            </form>
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