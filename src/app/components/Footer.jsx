import React from "react";
import Image from "next/image";
import logoSrc from "/public/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer z-10 border border-l-transparent border-r-transparent border-t-[#33353F] text-black">
      <div className="container flex justify-between p-12">
        <Image
          src={logoSrc}
          alt="Logo"
          width={80}
          height={80}
          className="object-contain"
        />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
