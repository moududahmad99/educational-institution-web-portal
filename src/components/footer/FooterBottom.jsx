import React from "react";
import { Link } from "react-router-dom";

const FooterBottom = () => (
  <div className="footer-bottom bg-[#79929C] items-center w-full p-4 flex justify-between flex-wrap">
    <h4 className="text-sm sm:text:md">
      All copyright © Danarhut Ansaria Fazil Madrasah
    </h4>
    <Link
      target="_blank"
      href="https://innovanex.netlify.app/"
      className="text-sm lg:text-md sm:text-md"
    >
      Developed By:{" "}
      <span className="underline lg:text-lg sm:text-md">InnovaNex Soft BD</span>
    </Link>
  </div>
);

export default FooterBottom;
