const notices = [
  {
    date: "৩, নভেম্বর",
    description: "পবিত্র ঈদ-মিলাদুন্নবী (সা:) উদযাপন উপলক্ষ্যে কর্মসূচি",
    year: "২০২৩",
  },
  {
    date: "২৭, অক্টোবর",
    description: "প্রতিষ্ঠানে সাত জন নতুন শিক্ষক নিয়োগ সম্পর্কে ।",
    year: "২০২৩",
  },
  {
    date: "১০, সেপ্টেম্বর",
    description: "প্রাথমিক শিক্ষা পরীক্ষার সময়সূচি ঘোষণা",
    year: "২০২৩",
  },
  {
    date: "২৫, জুন",
    description: "উচ্চশিক্ষা ক্লাসের পড়াশোনা সময়সূচি প্রকাশ",
    year: "২০২৩",
  },
  {
    date: "১৫, মে",
    description: "শিক্ষা প্রতিষ্ঠানে ছুটির দিনের ঘোষণা",
    year: "২০২৩",
  },
  // Add more notice data here
];

const NoticeBord = () => {
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-16 lg:pb-16 bg-[#FFFFFF] banner-right mt-4 sm:mt-0 shadow-lg">
      <h2 className="bg-[#79929C] text-center mb-2 py-4 text-white text-md shadow-lg">
        নোটিশ বোর্ড
      </h2>

      <div className="banner-rightNotice max-h-72 sm:max-h-72 md:max-h-72 lg:max-h-44 xl:max-h-72">
        {notices.map((notice, index) => (
          <div
            className="bg-[#F1EFEF] flex m-2 cursor-pointer items-center"
            key={index}
          >
            <div className="notice-date flex items-center justify-center py-2 flex-col text-center text-white bg-[#79929C]">
              <h5 className="border-b number-font">{notice.date}</h5>
              <h5 className="number-font">{notice.year}</h5>
            </div>
            <div className="items-center notice-desc flex px-4 py-2">
              <h4>{notice.description}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 absolute bottom-1 right-0 mb-3 mr-2 text-end">
        <a
          href="##"
          className="py-2 px-5 text-sm  underline text-white font-medium bg-[#79929c]"
        >
          সকল নোটিশ
        </a>
      </div>
    </div>
  );
};

export default NoticeBord;
