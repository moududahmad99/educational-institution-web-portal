import React from "react";
import { useQuery } from "react-query";
import { getLayoutByType } from "../../utills/getLayoutByType";
import ErrorMsg from "../errorMsg/ErrorMsg";
import Spinner from "../spinner/Spinner";
import ContactInfo from "./ContactInfo";
import "./Footer.css";
import FooterBottom from "./FooterBottom";
import ImportantLinks from "./ImportantLinks";
import InstitutionInfo from "./InstitutionInfo";

const Footer = () => {
  /* 
    fetch institutions information
  */
  const {
    data: institutionInfo,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getLayoutByType("institution_info"),
    queryKey: ["institution_info"],
    staleTime: Infinity,
  });

  return (
    <React.Fragment>
      <div id="footer" className="bg-[#FFFFFF] mt-8 pt-5">
        {/* render data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {isLoading ? (
            <Spinner />
          ) : isError ? (
            <ErrorMsg msg={error.message} />
          ) : !institutionInfo?.payload ? (
            <ErrorMsg msg="No data found" />
          ) : (
            <>
              <InstitutionInfo
                institutionInfo={institutionInfo?.payload?.institution_info}
              />
              <ContactInfo
                institutionInfo={institutionInfo?.payload?.institution_info}
              />
            </>
          )}

          <ImportantLinks />
        </div>

        <FooterBottom />
      </div>
    </React.Fragment>
  );
};

export default Footer;
