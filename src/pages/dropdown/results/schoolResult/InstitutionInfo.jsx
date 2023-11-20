import { useQuery } from "react-query";
import { getLayoutByType } from "../../../../utills/getLayoutByType";
import styles from "./marksSheet.module.css";

const InstitutionInfo = () => {
  /* 
    fetch institutions information
  */
  const { data: institutionInfo, isLoading } = useQuery({
    queryFn: () => getLayoutByType("institution_info"),
    queryKey: ["institution_info"],
    staleTime: Infinity,
  });
  return (
    <>
      {!isLoading && institutionInfo.payload && (
        <div
          className={`py-5 px-4 sm:block md:flex lg:flex items-center justify-between bg-[#FFFFFF] ${styles.logoArea}`}
        >
          <div className="flex items-center">
            {institutionInfo?.payload?.institution_info?.logo?.url && (
              <picture className="pr-5 max-[767px]:pr-0">
                <img
                  src={institutionInfo?.payload?.institution_info.logo.url}
                  alt="logo"
                  className="w-16 h-16 md:w-24 md:h-24"
                />
              </picture>
            )}
            <div>
              <h2 className="max-[767px]:text-xl md:text-2xl font-semibold mt-2">
                {institutionInfo?.payload?.institution_info.institution_name}
              </h2>
              <h4 className="max-[767px]:text-sm md:text-lg">
                {institutionInfo?.payload?.institution_info.location_name}
              </h4>
            </div>
          </div>
          <div className="text-end">
            <h3 className="text-lg max-[767px]:text-sm max-[767px]:pt-4">
              EIIN: {institutionInfo?.payload?.institution_info.EIIN}
            </h3>
            <h3 className="text-lg max-[767px]:text-sm">
              স্থাপিতঃ{" "}
              <span className="number-font">
                {" "}
                {institutionInfo?.payload?.institution_info.established} ইং{" "}
              </span>
            </h3>
            <h3 className="text-lg max-[767px]:text-sm">
              প্রতিষ্ঠানের কোড:{" "}
              {institutionInfo?.payload?.institution_info.institutionCode}
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default InstitutionInfo;
