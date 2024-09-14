import logo from "../assets/logo-cars-spot.svg";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 5 ? setnavColor("#ffffff") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <nav
      className="sticky top-0 z-50 py-3"
      style={{
        backgroundColor: navColor,
      }}
    >
      <div className="container px-4 mx-auto relative text-base roboto-flex-link ">
        <div className="flex justify-between items-center">
          <a href="#">
            <img className="h-8" src={logo} alt="logo" />
          </a>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <a href="#" className="link">
                Galeria zdjęć
              </a>
            </li>
            <li>
              <a href="#" className="link">
                FaQ
              </a>
            </li>
          </ul>
          <div className="hidden lg:flex">
            <button className="btn-primary">Zadzwoń do nas</button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 w-full py-4 mt-3 flex flex-col justify-center items-center border-t lg:hidden bg-white">
            <ul>
              <li className="py-3">
                <a href="#">Galeria zdjęć</a>
              </li>
              <li className="py-3">
                <a href="#">FaQ</a>
              </li>
              <li className="py-3">
                <a href="#" className="btn-primary">
                  Zadzwoń do nas
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
