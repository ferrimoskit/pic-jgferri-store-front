import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./logoipsum-329.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="flex flex-row items-center h-12 shadow-md px-5">
      <div className="flex flex-1 items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-20 px-5 py-1" />
        </Link>
      </div>

      <nav className="flex flex-1 justify-end items-center space-x-5">
        <Link to="/" className="text-lg text-gray-800 hover:text-gray-600">
          Contato
        </Link>
        <Link
          to="/carrinho"
          className="text-lg text-gray-800 hover:text-gray-600"
        >
          Carrinho
        </Link>
        {token ? (
          <>
            <Link
              to="/admin"
              className="text-lg text-gray-800 hover:text-gray-600"
            >
              Painel
            </Link>
            <button
              onClick={handleLogout}
              className="text-lg text-gray-800 hover:text-gray-600"
              aria-label="Logout"
            >
              Sair
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="text-lg text-gray-800 hover:text-gray-600"
          >
            Acesse sua conta
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
