const InstitutionInfo = ({ institutionInfo }) => {
  const {
    institution_name,
    logo,
    established,
    location_name,
    EIIN,
    institutionCode,
  } = institutionInfo || {};
  return (
    <div
      id="logoArea"
      className="py-5 px-4 sm:block md:flex lg:flex items-center justify-between  bg-[#FFFFFF]"
    >
      <div className="flex items-center">
        {logo?.url && (
          <picture className="pr-5 max-[767px]:pr-0">
            <img src={logo?.url} alt="logo" />
          </picture>
        )}
        <div>
          <h2 className="max-[767px]:text-xl md:text-2xl font-semibold mt-2">
            {institution_name}
          </h2>
          <h4 className="max-[767px]:text-sm md:text-lg">{location_name}</h4>
        </div>
      </div>
      <div className="text-end">
        <h3 className="text-lg max-[767px]:text-sm max-[767px]:pt-4">
          EIIN: {EIIN}
        </h3>
        <h3 className="text-lg max-[767px]:text-sm">
          স্থাপিতঃ <span className="number-font"> {established} ইং </span>
        </h3>
        <h3 className="text-lg max-[767px]:text-sm">
          প্রতিষ্ঠানের কোড: {institutionCode}
        </h3>
      </div>
    </div>
  );
};

export default InstitutionInfo;
