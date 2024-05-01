import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ServicesDropdown = ({ textColor }) => {
  return (
    <FlyoutLink href="/services" FlyoutContent={PricingContent}>
      <span style={{ color: `${textColor}` }}>Services</span>
    </FlyoutLink>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-32 bg-white p-6 shadow-xl text-center">
      <div className="mb-3 space-y-3">
        <a
          href="/services/nature"
          className="block text-sm hover:text-blue-700 hover:font-semibold "
        >
          Nature
        </a>
        <a
          href="/services/bridal"
          className="block text-sm  hover:text-blue-700 hover:font-semibold "
        >
          Bridal
        </a>
        <a
          href="/services/animals"
          className="block text-sm  hover:text-blue-700 hover:font-semibold "
        >
          Animals
        </a>
        <a
          href="/services/potraits"
          className="block text-sm  hover:text-blue-700 hover:font-semibold "
        >
          Portraits
        </a>
      </div>
    </div>
  );
};

export default ServicesDropdown;
