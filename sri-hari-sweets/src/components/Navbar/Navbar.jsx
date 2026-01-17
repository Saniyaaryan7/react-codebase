import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import logo from "../../assets/logo/logo.png";
import hamburger from "../../assets/icons/Hamburger.svg";
import searchIcon from "../../assets/icons/Searchbar.svg";
import shopIcon from "../../assets/icons/shop.svg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">

      {/*------------------ TOP BAR (DESKTOP + MOBILE) ----------- */}
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center relative">

        {/* LEFT LINKS  */}
        <div className="hidden md:flex gap-6 text-black font-medium">
          <NavLinks />
        </div>

        {/* CENTER LOGO  */}
        <NavLink
          to="/"
          className="absolute left-1/2 -translate-x-1/2 hidden md:block"
        >
          <img
            src={logo}
            alt="Sri Hari Sweets Logo"
            className="max-h-16 lg:max-h-20 w-auto object-contain"
          />
        </NavLink>

        {/* RIGHT SIDE  */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <NavLink
            to="/shop"
            className="flex items-center gap-2 px-4 py-2 rounded-full
                       text-black hover:bg-red-600 hover:text-white
                       transition shadow-md"
          >
            <img src={shopIcon} alt="Shop" className="w-5 h-5" />
            <span>Shop</span>
          </NavLink>

          <div className="relative">
            <input
              type="text"
              placeholder="Search cakes..."
              className="w-48 px-4 py-2 pr-10 rounded-full border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
            />
            <img
              src={searchIcon}
              alt="Search"
              className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 opacity-60"
            />
          </div>
        </div>

        {/* ================= MOBILE TOP BAR ================= */}
        <div className="flex md:hidden items-center w-full justify-between">

          {/* HAMBURGER (LEFT) */}
         <button
  onClick={() => setOpen(!open)}
  className="bg-transparent border-none outline-none active:bg-transparent focus:bg-transparent"
>
  <img src={hamburger} alt="Menu" className="w-7 h-7" />
</button>


          {/* LOGO */}
          <NavLink to="/">
            <img
              src={logo}
              alt="Sri Hari Sweets"
              className="h-14 object-contain"
            />
          </NavLink>

          {/* SHOP ICON */}
          <button
  onClick={() => navigate("/shop")}
  className="bg-transparent border-none outline-none active:bg-transparent focus:bg-transparent"
>
  <img src={shopIcon} alt="Shop" className="w-7 h-7" />
</button>

        </div>
      </div>

      {/* ================= MOBILE SEARCH BAR ================= */}
      <div className="md:hidden px-4 pb-3 bg-white">
        <div className="flex items-center rounded-xl border overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Search cakes..."
            className="flex-1 px-4 py-2 text-sm outline-none"
          />
          <button className="bg-red-600 px-4 py-2">
            <img src={searchIcon} alt="Search" className="w-4 h-4 invert" />
          </button>
        </div>
      </div>

      {/* ================= MOBILE SLIDE MENU ================= */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setOpen(false)}
        ></div>

        <div
          className={`absolute left-0 top-0 h-full w-72 bg-white
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex justify-center py-6 border-b">
            <img src={logo} alt="Sri Hari Sweets" className="h-14" />
          </div>

          <div className="flex flex-col gap-3 px-6 pt-6 font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
              { name: "Shop", path: "/shop" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 transition ${
                    isActive
                      ? "bg-red-600 text-white"
                      : "hover:bg-red-600 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
