import React from "react";
import { NavLink } from "react-router-dom";
import {
   LayoutGrid,   
  Cake,        
  Layers,      
  BarChart2,    
  LogOut,
  X,
} from "lucide-react";

export default function Sidebar({ open, setOpen }) {
  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/*  Overlay (mobile only) */}
      {open && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/*  Sidebar */}
    <aside
  className={`fixed md:sticky md:top-0 left-0 z-40
  w-64 h-screen bg-[#1F4E5F] text-white
  flex flex-col transition-transform duration-300
  ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
>


        {/*  Profile */}
        <div className="px-6 pt-8 pb-6 flex flex-col items-center border-b border-white/20">
          <img
            src="https://i.pravatar.cc/100"
            alt="admin"
            className="w-20 h-20 rounded-full border-4 border-white"
          />
          <h3 className="mt-3 font-semibold">Sri Hari Admin</h3>
          <p className="text-xs text-white/70">admin@sweets.com</p>
        </div>

        {/*  Menu */}
        <nav className="flex-1 px-3 py-4 space-y-2">
          <MenuItem to="/admin/dashboard" icon={LayoutGrid} text="Dashboard" onClick={closeSidebar} />
          <MenuItem to="/admin/cakes" icon={Cake} text="Cakes" onClick={closeSidebar} />
          <MenuItem to="/admin/super-category" icon={Layers} text="Super Category" onClick={closeSidebar} />
          <MenuItem to="/admin/category" icon={BarChart2} text="Category" onClick={closeSidebar} />
        </nav>

        {/*  Logout */}
        <div className="p-4 border-t border-white/20">
          <button
            onClick={closeSidebar}
            className="flex items-center gap-3 text-white/80 hover:text-white transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

/*  Menu Item with pill active effect */
function MenuItem({ to, icon: Icon, text, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `relative flex items-center gap-3 px-5 py-3 text-sm rounded-lg
        transition-all duration-300
        ${
          isActive
            ? "bg-[#EAF4F6] text-[#1F4E5F] font-semibold shadow-md"
            : "text-white/80 hover:bg-white/10 hover:text-white"
        }`
      }
    >
      <Icon size={18} />
      <span>{text}</span>

      {/*  Right pill curve (active) */}
      <span
        className={({ isActive }) =>
          isActive
            ? "absolute right-0 top-0 h-full w-3 bg-[#EAF4F6] rounded-l-full"
            : "hidden"
        }
      />
    </NavLink>
  );
}
