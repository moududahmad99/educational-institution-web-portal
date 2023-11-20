import React from "react";

const ContactInfo = ({ institutionInfo }) => (
  <div className="bg-[#EDEDED45] p-4 rounded pt-8">
    <h3 className="text-xl font-semibold pb-4">যোগাযোগঃ</h3>
    <h5>গ্রামঃ {institutionInfo.village} </h5>
    <h5 className="py-1">উপজেলা ও জেলাঃ {institutionInfo.district}</h5>
    <h5>ইমেইলঃ {institutionInfo.email}</h5>
    <h5 className="py-1">
      মোবাইলঃ <span className="number-font">{institutionInfo.phone}</span>
    </h5>
    <h5>ওয়েবসাইটঃ {institutionInfo.website}</h5>
  </div>
);

export default ContactInfo;
