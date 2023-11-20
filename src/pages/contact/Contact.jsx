import React from "react";
import { useQuery } from "react-query";
import ErrorMsg from "../../components/errorMsg/ErrorMsg";
import Spinner from "../../components/spinner/Spinner";
import { getLayoutByType } from "../../utills/getLayoutByType";
import "./Contact.css";
import InstitutionInfo from "./InstitutionInfo";

const Contact = () => {
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
      <div id="contact">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className="bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14  py-2">
            যোগাযোগ
          </h3>
        </div>

        <div className="contact-inner grid grid-cols-1 md:grid-cols-2 gap-4  items-center">
          {isLoading ? (
            <Spinner />
          ) : isError ? (
            <ErrorMsg msg={error.message} />
          ) : !institutionInfo?.payload?.institution_info ? (
            <ErrorMsg msg="No data found" />
          ) : (
            <div className="md:min-h-[496px] bg-[#FFFFFF]">
              <InstitutionInfo
                institution_info={institutionInfo?.payload?.institution_info}
              />
            </div>
          )}

          <div className="bg-[#FFFFFF] contact-map">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={institutionInfo?.payload?.institution_info?.map_link}
              title={
                institutionInfo?.payload?.institution_info?.institution_name
              }
            ></iframe>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;

// "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64454.92001022029!2d88.47133635267274!3d25.90487231882091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4c78eebb3154f%3A0x9f7f1e031fd1fb1a!2sDanarhat%20Madrasah%20Playground!5e0!3m2!1sen!2sbd!4v1697629193272!5m2!1sen!2sbd"
