import React from "react";
import { useQuery } from "react-query";
import { getLayoutData } from "../../utills/getLayoutData";
import ErrorMsg from "../errorMsg/ErrorMsg";
import Spinner from "../spinner/Spinner";

const MessageData = ({ type }) => {
  const { data, isLoading, error, isError } = useQuery({
    staleTime: Infinity,
    queryKey: [type],
    queryFn: () => getLayoutData(`/layout?type=${type}`),
  });

  // what to render
  // data render
  let layoutData;
  if (isLoading) {
    layoutData = (
      <div className="flex justify-center items-center py-4">
        <Spinner />
      </div>
    );
  } else if (!isLoading && isError) {
    layoutData = (
      <div>
        <ErrorMsg msg={error.message} />
      </div>
    );
  } else if (!isLoading && !isError && !data?.payload) {
    layoutData = (
      <div>
        <ErrorMsg msg={"No data found"} />
      </div>
    );
  } else if (!isLoading && !isError && data?.payload) {
    layoutData = (
      <div
        className="no-tailwind"
        dangerouslySetInnerHTML={{
          __html: data?.payload?.[type]?.desc || "",
        }}
      />
    );
  }
  return <div>{layoutData}</div>;
};

export default MessageData;
