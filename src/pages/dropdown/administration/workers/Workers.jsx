import React, { useState } from "react";
import { useQuery } from "react-query";
import ErrorMsg from "../../../../components/errorMsg/ErrorMsg";
import Spinner from "../../../../components/spinner/Spinner";
import { getAdministrators } from "../../../../utills/getAdministrators";

const Workers = () => {
  const [limit] = useState(8);
  const [page] = useState(1);

  /* 
    get all staff data
  */
  const {
    data: staffData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () =>
      getAdministrators({
        limit: parseInt(limit),
        role: "staff",
        page: parseInt(page),
      }),
    queryKey: ["staffs", { page, limit }],
    staleTime: Infinity,
  });

  /* 
    render staffs profile
  */
  let staffs;
  if (isLoading) {
    staffs = (
      <div>
        <Spinner />
      </div>
    );
  } else if (!isLoading && isError) {
    staffs = <ErrorMsg msg={error.message} />;
  } else if (
    !isLoading &&
    !isError &&
    staffData?.payload.administrators.length === 0
  ) {
    staffs = <ErrorMsg msg={"No data found"} />;
  } else if (
    !isLoading &&
    !isError &&
    staffData?.payload.administrators.length > 0
  ) {
    staffs = (
      <div className="teachers-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {staffData?.payload.administrators.map((worker, index) => (
          <div
            key={index}
            className="teachers-card p-4 bg-[#FFFFFF] shadow my-3 flex flex-col items-center"
          >
            <div className="teachers-card-img my-4">
              {worker?.image?.url ? (
                <picture>
                  <img src={worker.image.url} alt="profile" />
                </picture>
              ) : (
                <picture>
                  <img src={"/assets/profile.jpg"} alt="profile" />
                </picture>
              )}
            </div>
            <div className="teachers-card-identity">
              <h4 className="font-medium text-md">{worker.name}</h4>
              <h5>{worker.position}</h5>
              <h6>{worker.institution}</h6>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <React.Fragment>
      <div id="workers">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className="bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14  py-2">
            কর্মকর্তা
          </h3>
          {/* <p className='text-md font-medium mt-2'>home / administration / <span className='text-red-800'> management-committee</span></p> */}
        </div>

        {staffs}
      </div>
    </React.Fragment>
  );
};

export default Workers;
