import React from "react";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import Link

const NavLinks = [
  { id: 1, title: "About", link: "/about" },
  { id: 2, title: "Services", link: "/services" },
  { id: 3, title: "Projects", link: "/projects" }, // Fixed name to plural
  { id: 4, title: "Contact", link: "/contact" },
];

const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-10" />
          <span className="text-2xl font-bold">Interior</span>
        </div>

        {/* Link section */}
        <div className="hidden md:block !space-x-12">
          {NavLinks.map((link) => (
            <Link
              key={link.id} // ✅ Add key
              to={link.link} // ✅ Use 'to' instead of 'href'
              className="inline-block mx-4 text-lg font-semibold hover:text-indigo-600"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Button section */}
        <div>
          <button className="primary-btn">Try For Free</button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
