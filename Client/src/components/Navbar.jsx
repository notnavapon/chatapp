import React from "react";
import { Link, Navigate } from "react-router-dom";
import { userAuthStore } from "../store/userAuthStore";
import { LogIn, LogOut, MessageSquare, Settings, User,MessageCircleMore, Handshake } from "lucide-react";
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

const Navbar = () => {
  const { logout, authUser } = userAuthStore();
  const { theme, setTheme } = useThemeStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Handshake className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Portfolio</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <details>
                    <summary>Theme</summary>
                    <ul className="p-2">
                      {" "}
                      {/* เพิ่ม className="p-2" เพื่อให้มี padding เล็กน้อย */}
                      {THEMES.map((theme, index) => (
                        <li key={index}>
                          <a data-theme={theme} onClick={()=>{setTheme(theme)}}>{theme}</a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              </ul>
            </div>

            {/* <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link> */}

            {authUser && (
              <>
                <Link to={"/chat"} className={`btn btn-sm gap-2`}>
                  <MessageCircleMore />
                  <span className="hidden sm:inline">Chat wc</span>
                </Link>
                
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
            {!authUser && (
              <Link to="/login">
                <button className="flex gap-2 items-center" >
                  <LogIn className="size-5" />
                  <span className="hidden sm:inline">Login</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
