const InstitutionInfo = ({ institution_info }) => {
  const {
    phone,
    institution_name,
    email,
    postOffice,
    district,
    village,
    EIIN,
    established,
    institutionCode,
    website,
    logo,
  } = institution_info || {};
  return (
    <div className="pl-8 sm:pl-10 md:pl-10 lg:pl-10 xl:pl-14 p-4 rounded flex justify-center flex-col">
      {logo?.url && (
        <picture className="flex justify-center sm:justify-start">
          <img src={logo?.url} alt="institution-logo" />
        </picture>
      )}
      <div>
        <h2 className="max-[767px]:text-lg md:text-xl font-semibold mt-4">
          {institution_name}
        </h2>
        <h4 className="max-[767px]:text-sm md:text-md">
          ডাকঘরঃ {postOffice}, জেলাঃ {district}
        </h4>
      </div>
      <hr className="mt-4 mr-4" />
      <div>
        <h3 className="text-md max-[767px]:text-sm pt-4">EIIN: {EIIN}</h3>
        <h3 className="text-md max-[767px]:text-sm">
          স্থাপিতঃ <span className="number-font"> {established}</span> ইং{" "}
        </h3>
        <h3 className="text-md max-[767px]:text-sm">
          প্রতিষ্ঠানের কোড: {institutionCode}
        </h3>
      </div>

      <hr className="mt-4 mr-4" />
      <h5 className=" pt-4">গ্রামঃ {village} </h5>
      <h5 className="py-1">উপজেলা ও জেলাঃ {district}</h5>
      <h5>ইমেইলঃ {email}</h5>
      {phone && (
        <h5 className="py-1">
          মোবাইলঃ <span className="number-font">{phone}</span>
        </h5>
      )}
      <h5>ওয়েবসাইটঃ {website}</h5>
    </div>
  );
};

export default InstitutionInfo;
