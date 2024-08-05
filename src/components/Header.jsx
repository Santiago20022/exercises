import LogoInstagram from "../assets/logo-instagram.png";
import React, { useContext } from "react";
import Nav from "./Nav";
import { UserContext } from "../context/UserContext";

function Header() {
  const { userId } = useContext(UserContext);
  console.log('userId-->', userId);
  return (
    <>
      {userId ? (
        <Nav />
      ) : (
      <nav className="flex items-center justify-end flex-wrap bg-white px-2 border-b-2 lg:px-36">
        <img src={LogoInstagram} alt="login" className="h-20 " />
        <span className="flex gap-4 font-extrabold">
          <button className="bg-blue-500 text-white font-bold py-1 px-4 rounded-lg">
            sign in
          </button>
          <button className="text-blue-400 font-bold">sign up</button>
        </span>
      </nav>
    )}
    </>
  );
}
export default Header;
