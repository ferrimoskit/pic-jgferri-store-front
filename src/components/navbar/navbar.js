import React from "react";
import Logo from "./logoipsum-329.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="flex flex-row flex-start flex-nowrap h-12">
      <div className="flex flex-1 justify-items-start items-center">
        <div>
          <Link to="/"><img src={Logo} alt="Logo" className="w-20 px-5 py-1" /> </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-items-start flex-row items-center">
        <div>
          <p className="px-5 text-lg">Contato</p>
        </div>
        <div>
           <p className="px-5 text-lg"><Link to="/carrinho">Carrinho</Link></p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
