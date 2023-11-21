import React from "react";
import MessageData from "../messageData/MessageData";
import "./About.css";
import PresidentInfo from "./PresidentInfo";
import PrincipalInfo from "./PrincipalInfo";

const About = () => {
  return (
    <React.Fragment>
      <div id="about" className="mt-5">
        <div className="about-wrapper grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
          <div className="about-inner grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 col-span-2 ">
            <div className="bg-[#FFFFFF90] my-3">
              <div className="about-title bg-[#79929C] pl-4 py-4 text-white text-lg">
                <h3>প্রতিষ্ঠান সম্পর্কে</h3>
              </div>
              <div className="about-description p-4">
                <MessageData type={"about_institution"} />
              </div>

              <div className="about-title bg-[#79929C] mt-4 pl-4 py-4 text-white text-lg">
                <h3>প্রতিষ্ঠানের লক্ষ্য ও উদ্দেশ্য</h3>
              </div>
              <div className="about-description p-4">
                <MessageData type={"institution_objective"} />
              </div>
            </div>
          </div>

          {/* precedential data */}
          <div className="about-inner sm:col-span-2 lg:col-span-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
            <PrincipalInfo />
            <PresidentInfo />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
