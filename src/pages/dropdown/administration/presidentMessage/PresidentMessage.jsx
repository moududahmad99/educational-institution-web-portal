import React from "react";
import { useQuery } from "react-query";
import ErrorMsg from "../../../../components/errorMsg/ErrorMsg";
import Spinner from "../../../../components/spinner/Spinner";
import { getAdministrators } from "../../../../utills/getAdministrators";
import { getLayoutData } from "../../../../utills/getLayoutData";

const PresidentMessage = () => {
  /* 
    get সভাপতি teachers data
  */
  const {
    data: presidentTeacherData,
    isLoading: isPreTLoading,
    isError: isPreError,
    error: preError,
  } = useQuery({
    queryFn: () =>
      getAdministrators({ limit: 1, role: "others", position: "সভাপতি" }),
    queryKey: ["president"],
    staleTime: Infinity,
  });

  // fetech data
  const { data, isLoading, error, isError } = useQuery({
    staleTime: Infinity,
    queryKey: ["principal_message"],
    queryFn: () => getLayoutData(`/layout?type=principal_message`),
  });

  //data render

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
          __html: data?.payload?.principal_message?.desc || "",
        }}
      />
    );
  }

  return (
    <React.Fragment>
      <div id="presidentMessage">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className="bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14  py-2">
            প্রতিষ্ঠান সভাপতির বাণী
          </h3>
        </div>

        <div className="teachers-card">
          <div className="p-4 bg-[#FFFFFF] shadow my-3 flex flex-col">
            {presidentTeacherData?.payload && (
              <>
                <div className="my-4 flex justify-center">
                  <picture className="w-52 h-52">
                    {presidentTeacherData?.payload.administrators[0]?.image
                      ?.url ? (
                      <img
                        src={
                          presidentTeacherData?.payload.administrators[0]?.image
                            .url
                        }
                        className="object-cover w-52 h-52"
                        alt="profile"
                      />
                    ) : (
                      <img
                        src={`/assets/profile.jpg`}
                        className="object-cover"
                        alt="profile"
                      />
                    )}
                  </picture>
                </div>
                <div className="teachers-card-identity">
                  <h4 className="font-medium text-lg">
                    {presidentTeacherData?.payload.administrators[0].name}
                  </h4>
                  <h5>
                    {presidentTeacherData?.payload.administrators[0]?.position}
                  </h5>
                  <h5 className="mt-6 text-md font-semibold">অধ্যক্ষের বাণী</h5>
                </div>
              </>
            )}

            {/* 
          showing error messages and loading
          */}
            {isPreTLoading && (
              <div className="flex justify-center items-center py-4">
                <Spinner />
              </div>
            )}
            {!isPreTLoading &&
              !presidentTeacherData?.payload.administrators[0] && (
                <div className="flex justify-center items-center py-4">
                  <ErrorMsg msg="No data found" />
                </div>
              )}
            {isPreError && (
              <div className="flex justify-center items-center py-4">
                <ErrorMsg msg={preError.message} />
              </div>
            )}

            {/* message */}
            {layoutData}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PresidentMessage;
