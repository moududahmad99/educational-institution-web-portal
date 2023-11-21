import React from "react";
import { useQuery } from "react-query";
import ErrorMsg from "../../../../components/errorMsg/ErrorMsg";
import Spinner from "../../../../components/spinner/Spinner";
import { getAdministrators } from "../../../../utills/getAdministrators";
import PrincipalData from "./PrincipalData";

const TYPE = "principal";

const PrincipalMessage = () => {
  // fetech data
  const { data, isLoading, error, isError } = useQuery({
    staleTime: Infinity,
    queryKey: [TYPE],
    queryFn: () => getAdministrators({ role: TYPE }),
  });

  return (
    <React.Fragment>
      <div id="principalMessage">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className="bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14  py-2">
            অধ্যক্ষের বাণী
          </h3>
        </div>

        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <ErrorMsg msg={error.message} />
        ) : data?.payload?.administrators?.length === 0 ? (
          <ErrorMsg msg="No data found" />
        ) : (
          <>
            <PrincipalData data={data?.payload?.administrators[0]} />
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default PrincipalMessage;
