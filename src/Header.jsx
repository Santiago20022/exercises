import LogoInstagram from "./assets/logo-instagram.png";

function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white px-2 border-b-2 lg:px-36">
      <img src={LogoInstagram} alt="login" className="h-20 " />
      <span className="flex gap-4 font-extrabold ">
        <button className="bg-blue-500 text-white font-bold py-1 px-4 rounded-lg">
          Iniciar sesión
        </button>
        <button className="text-blue-400 font-bold">Registrarte</button>
      </span>
    </nav>
  );
}
export default Header;
