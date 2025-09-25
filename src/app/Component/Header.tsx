"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Moon,
  Sun,
  Headphones,
  ImageIcon,
  Menu,
  X,
} from "lucide-react";
import HeaderWrapper from "../ReusableComp/headerWrapper";
import { icons } from "../config/data/Data";

function Header() {
  const [active, setActive] = useState(icons[0]);
  const [switchMode, setSwitchMode] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = switchMode ? "#000" : "#fff";
    document.body.style.color = switchMode ? "#fff" : "#000";
  }, [switchMode]);

  return (
    <HeaderWrapper>
      <div className="w-full flex justify-between items-center px-4 py-2">
        {/* === Left Logo/User === */}
        <div className="flex items-center gap-3 animate-slide-right">
          <Image
            src={"/icon/krea-logo2.svg"}
            alt="krea"
            width={40}
            height={30}
            priority
          />

          <div className="hidden sm:flex items-center gap-2">
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-sky-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            />

            <div className="flex items-center gap-1">
              <h1>benjamineboh</h1>
              <ChevronDown width={15} />
            </div>
          </div>
        </div>

        {/* === Desktop Nav Icons === */}
        <ul className="hidden lg:flex gap-8 rounded-lg bg-gray-100 py-3 px-4 ml-5 animate-fade-in">
          {icons.map((items, index) => (
            <motion.li
              key={index}
              onClick={() => setActive(items)}
              className={`cursor-pointer hover:scale-110 px-2 py-2 ${
                active === items ? "bg-white py-2 px-2 rounded-lg" : ""
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <Image src={items} alt="icons" width={30} height={30} />
            </motion.li>
          ))}
        </ul>

        {/* === Desktop Right Actions === */}
        <div className="hidden md:flex items-center gap-3 animate-slide-left">
          <div className="flex items-center gap-3 bg-gray-100 py-2 px-2 rounded-md text-black">
            <ImageIcon />
            <span>Gallery</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-100 py-2 px-2 rounded-md text-black">
            <Headphones />
            <span>Support</span>
          </div>
          <div className="bg-gray-100 rounded-md py-2 px-2">
            <Image
              src={"/icon/bell-solid-full.svg"}
              alt="alarm"
              width={30}
              height={30}
            />
          </div>
          <div
            className="bg-gray-100 px-2 py-2 rounded-md cursor-pointer"
            onClick={() => setSwitchMode((prev) => !prev)}
          >
            {switchMode ? <Moon size={30} fill="black"/> : <Sun size={30} fill="black"/>}
          </div>

          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-sky-500"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          />
        </div>

        {/* === Mobile Hamburger === */}
        <button
          className="block md:hidden p-2 rounded-md bg-gray-100"
          onClick={() => setOpenNav(true)}
        >
          <Menu className="w-6 h-6" fill="#000000"/>
        </button>
      </div>

      {/* === Mobile Slide-In Nav === */}
      <AnimatePresence>
        {openNav && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl z-50 p-6 flex flex-col text-black"
          >
            <button
              className="self-end mb-6 p-2 bg-gray-200 rounded-full"
              onClick={() => setOpenNav(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <ul className="flex flex-col gap-6">
              {icons.map((items, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setActive(items);
                    setOpenNav(false);
                  }}
                  className={`cursor-pointer flex items-center gap-3 ${
                    active === items ? "font-semibold" : ""
                  }`}
                >
                  <Image src={items} alt="icons" width={30} height={30} />
                  <span>Menu {index + 1}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex gap-4">
              <button
                className="bg-gray-200 dark:bg-gray-800 p-2 rounded-md"
                onClick={() => setSwitchMode((prev) => !prev)}
              >
                {switchMode ? <Moon fill="black"/> : <Sun fill="black"/>}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </HeaderWrapper>
  );
}

export default Header;
