import React from "react";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const ImportantLinks = () => {
  return (
    <>
      <div className="bg-[#EDEDED45] p-4 rounded pt-8">
        <div>
          <h3 className="text-xl font-semibold pb-4">গুরুত্বপূর্ণ লিংকঃ</h3>
          <ul className="pl-4">
            <li className="list-disc underline">
              <Link target="_blank" to="http://www.bangladesh.gov.bd/">
                বাংলাদেশ জাতীয় তথ্য বাতায়ন
              </Link>
            </li>
            <li className="list-disc underline py-1">
              <Link target="_blank" to="http://dme.gov.bd/">
                মাদ্রাসা শিক্ষা অধিদপ্তর
              </Link>
            </li>
            <li className="list-disc underline">
              <Link target="_blank" to="http://banbeis.gov.bd/">
                বাংলাদেশ শিক্ষাতথ্য ও পরিসংখ্যান ব্যুরো
              </Link>
            </li>
            <li className="list-disc underline py-1">
              <Link target="_blank" to="https://www.thakurgaon.gov.bd/">
                জেলা প্রশাসকের কার্যালয়, ঠাকুরগাঁও
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="mt-2 flex gap-4">
            <li className="p-2 bg-[#F1EFEF] text-black text-2xl">
              <i>
                <FaFacebook />
              </i>
            </li>
            <li className="p-2 bg-[#F1EFEF] text-black text-2xl">
              <i>
                <AiFillTwitterSquare />
              </i>
            </li>
            <li className="p-2 bg-[#F1EFEF] text-black text-2xl">
              <i>
                <FaYoutube />
              </i>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#EDEDED45] p-4 rounded pt-8">
        <div>
          <h3 className="text-xl font-semibold pb-4">বোর্ড লিংকঃ</h3>
          <ul className="pl-4">
            <li className="list-disc underline">
              <Link target="_blank" to="http://bmeb.gov.bd/">
                বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ড
              </Link>
            </li>
            <li className="list-disc underline py-1">
              <Link target="_blank" to="http://www.educationboard.gov.bd/">
                জাতীয় শিক্ষা বোর্ড
              </Link>
            </li>
            <li className="list-disc underline">
              <Link target="_blank" to="http://www.nctb.gov.bd/">
                জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড
              </Link>
            </li>
            <li className="list-disc underline py-1">
              <Link target="_blank" to="https://moedu.gov.bd/">
                শিক্ষা মন্ত্রনালয়
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ImportantLinks;
