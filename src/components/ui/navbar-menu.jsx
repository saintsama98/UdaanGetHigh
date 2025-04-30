"use client";
import React from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  className
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-gray-100 hover:bg-[#28282c] px-6 py-3 text-sm font-medium rounded-lg transition">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-gradient-to-br from-[#5472E4] to-[#23AFD0] backdrop-blur-sm rounded-lg overflow-hidden border border-[#5472E4]/20 shadow-xl">
                <motion.div
                  layout
                  className={`w-max h-full p-4 ${className}`}>
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative border border-[#232329] bg-[#232329] shadow-input flex justify-center items-center space-x-12 px-12 py-3">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl" />
      <div>
        <h4 className="text-xl font-bold mb-1 text-gray-100">
          {title}
        </h4>
        <p className="text-gray-400 text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({
  children,
  className,
  ...rest
}) => {
  return (
    <a
      {...rest}
      className={`text-white hover:text-white/90 py-2 block transition-all duration-200 ${className}`}>
      {children}
    </a>
  );
};
