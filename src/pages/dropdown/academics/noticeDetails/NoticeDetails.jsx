import React from "react";

const NoticeDetails = () => {
  const notices = [
    {
      description: "পবিত্র ঈদ-মিলাদুন্নবী (সা:) উদযাপন উপলক্ষ্যে কর্মসূচি",
    },
  ];

  return (
    <React.Fragment>
      <div className="noticeDetails">
        {/* Title */}
        {notices.map((notice, index) => (
          <div
            className="bg-[#F1EFEF] flex m-2 cursor-pointer items-center"
            key={index}
          >
            <div className="items-center   py-2 notice-desc">
              <h4 className="font-medium">{notice.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default NoticeDetails;
