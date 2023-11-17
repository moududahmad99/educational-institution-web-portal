import React from "react";
import MessageData from "../../../../components/messageData/MessageData";

const ScoutGuide = () => {
  return (
    <React.Fragment>
      <div id="scoutGuide">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className="bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14 py-2">
            বয় ও গার্লস স্কাউট গাইড
          </h3>
        </div>

        <div className="border p-8 flex flex-col justify-center item-center bg-[#F5F5F5] my-14  text-lg">
          <MessageData type={"boys_and_girls_scout_guide"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScoutGuide;
