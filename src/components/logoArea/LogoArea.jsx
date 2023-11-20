import React from "react";
import { useQuery } from "react-query";
import { getLayoutByType } from "../../utills/getLayoutByType";
import InstitutionInfo from "./InstitutionInfo";
import "./LogoArea.css";

const LogoArea = () => {
  /* 
    fetch institutions information
  */
  const { data: institutionInfo, isLoading } = useQuery({
    queryFn: () => getLayoutByType("institution_info"),
    queryKey: ["institution_info"],
    staleTime: Infinity,
  });

  return (
    <React.Fragment>
      {!isLoading && institutionInfo?.payload && (
        <InstitutionInfo
          institutionInfo={institutionInfo.payload.institution_info}
        />
      )}
    </React.Fragment>
  );
};

export default LogoArea;
