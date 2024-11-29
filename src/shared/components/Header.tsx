import { Button, CustomFlowbiteTheme, Navbar } from "flowbite-react";
import { menuItems } from "./data/MenuItems";
import { MenuItem } from "./types/MenuItems";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {

  
  const location = useLocation();
  const currentPath = location.pathname || "/";

  const navTheme: CustomFlowbiteTheme["navbar"] = {
    collapse: {
      base: "w-[90%] md:block md:w-auto absolute md:relative bg-white top-20 md:top-0 transition-all transition-transform duration-1000",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },

    link: {
      active: {
        on: "text-bold border-b-2 border-purple-950 border-solid",
      },
    },
  };

  return (
    <Navbar
      theme={navTheme}
      fluid
      rounded
      className="sticky backdrop-blur-2xl z-50 px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 rounded container mx-auto  top-2"
    >
      <Navbar.Brand href="https://izhtech.com">
        <img
          src="/logo-primary.png"
          className="w-16"
          alt="izhtech | Your Digital Partner"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link
          to={{
            pathname: "/contact",
          }}
        >
          {" "}
          <Button className="bg-black">Let's Talk</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        {menuItems.map((menu: MenuItem) => {
          return (
            <motion.div >
            <Navbar.Link
              href={`${menu.path}`}
              className="text-bold "
              active={menu.path == currentPath}
            >
              {" "}
              {menu.label}
              </Navbar.Link>
              </motion.div>
          );
        })}
      </Navbar.Collapse>

    </Navbar>
  );
}
