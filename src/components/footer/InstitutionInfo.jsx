import React from "react";

const InstitutionInfo = ({ institutionInfo }) => (
  <div className="bg-[#EDEDED45] p-4 rounded">
    {institutionInfo?.logo?.url && (
      <picture className="flex justify-center flex-col items-center">
        <img src={institutionInfo?.logo?.url} alt="institution logo" />
      </picture>
    )}
    <div>
      <h2 className="max-[767px]:text-lg md:text-xl font-semibold mt-4">
        {institutionInfo.institution_name}
      </h2>
      <h4 className="max-[767px]:text-sm md:text-md">
        ডাকঘরঃ {institutionInfo.postOffice}, জেলাঃ {institutionInfo.district}
      </h4>
    </div>
    <div>
      <h3 className="text-md max-[767px]:text-sm pt-4">
        EIIN: {institutionInfo.EIIN}
      </h3>
      <h3 className="text-md max-[767px]:text-sm">
        স্থাপিতঃ{" "}
        <span className="number-font"> {institutionInfo.established}</span> ইং{" "}
      </h3>
      <h3 className="text-md max-[767px]:text-sm">
        প্রতিষ্ঠানের কোড: {institutionInfo.institutionCode}
      </h3>
    </div>
  </div>
);

export default InstitutionInfo;
