import React from "react";
import { NavLink } from "react-router-dom";
import { NavMenu } from "../Navbar/variables/NavMenu";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="max-w-screen-xl mx-auto p-4 py-12 flex flex-col gap-y-4">
        <div className="w-full flex items-center justify-between px-4">
          <div className="hidden lg:block">
            <img src="/suitmedia.png" alt="" className="w-12" />
          </div>
          <ul className="font-semibold text-neutral-500 text-sm flex gap-x-4">
            {NavMenu.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="font-semibold text-neutral-500 flex items-center justify-center text-sm mt-4">
            © <a href="https://github.com/OnyanPokon">OnyanPokon | Rafiq . D</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
