import React from "react";
import { useQuery } from "react-query";
import { getAdministrators } from "../../utills/getAdministrators";
import ErrorMsg from "../errorMsg/ErrorMsg";
import Spinner from "../spinner/Spinner";
import Card from "./Card";

const TYPE = "principal";

const PrincipalInfo = () => {
  // fetech data
  const { data, isLoading, error, isError } = useQuery({
    staleTime: Infinity,
    queryKey: [TYPE],
    queryFn: () => getAdministrators({ role: TYPE }),
  });

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <ErrorMsg msg={error.message} />
      ) : data?.payload?.administrators?.length === 0 ? (
        <ErrorMsg msg="No data found" />
      ) : (
        <>
          <Card
            data={data?.payload?.administrators[0]}
            link={`/administration/president-message`}
          />
        </>
      )}
    </div>
  );
};

export default PrincipalInfo;
