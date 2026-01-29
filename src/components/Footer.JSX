import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-neutral-900 text-neutral-300 py-16">
      <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-3 gap-8">

        <div className="flex flex-col gap-2">
          <h3 className="text-white text-2xl font-bold">FashionStore</h3>
          <p className="text-neutral-500 text-sm">
            Get your style
          </p>
        </div>

        {/* contact_info */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <MdOutlineMailOutline className="w-5 h-5" />
            <p className="text-sm">contact@webcraft.com</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="w-5 h-5" />
            <p className="text-sm">+91 xxxxxxxxxx</p>
          </div>
        </div>

        {/* social_links */}
        <div className="flex flex-col gap-2">
          <h6 className="text-sm font-semibold text-white">Connect with us</h6>
          <div className="flex gap-4 mt-2 text-xl text-neutral-400">
            <a href="#">
              <FaInstagramSquare />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>

      
      <div className="border-t border-neutral-700 mt-12"></div>
      <p className="text-center text-neutral-500 text-sm mt-6">
        © {new Date().getFullYear()} WebCraft. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
