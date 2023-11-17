import React from "react";
import { useQuery } from "react-query";
import ErrorMsg from "../../../../components/errorMsg/ErrorMsg";
import Spinner from "../../../../components/spinner/Spinner";
import { getAdministrators } from "../../../../utills/getAdministrators";
import { getLayoutData } from "../../../../utills/getLayoutData";

const PrincipalMessage = () => {
  /* 
    get অধ্যক্ষ teachers data
  */
  const {
    data: principalTeacherData,
    isLoading: isPriTLoading,
    isError: isPriError,
    error: priError,
  } = useQuery({
    queryFn: () =>
      getAdministrators({ limit: 1, role: "teacher", position: "অধ্যক্ষ" }),
    queryKey: ["principal"],
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
      <div id="principalMessage">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className="bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14  py-2">
            অধ্যক্ষের বাণী
          </h3>
        </div>

        <div className="teachers-card">
          <div className="p-4 bg-[#FFFFFF] shadow my-3 flex flex-col">
            {principalTeacherData?.payload && (
              <>
                <div className="my-4 flex justify-center">
                  <picture className="w-52 h-52">
                    {principalTeacherData?.payload.administrators[0]?.image
                      ?.url ? (
                      <img
                        src={
                          principalTeacherData?.payload.administrators[0]?.image
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
                    {principalTeacherData?.payload.administrators[0].name}
                  </h4>
                  <h5>
                    {principalTeacherData?.payload.administrators[0]?.position}
                  </h5>
                  <h5 className="mt-6 text-md font-semibold">অধ্যক্ষের বাণী</h5>
                </div>
              </>
            )}
            {/* 
          showing error messages and loading
          */}
            {isPriTLoading && (
              <div className="flex justify-center items-center py-4">
                <Spinner />
              </div>
            )}
            {!isPriTLoading &&
              !principalTeacherData?.payload.administrators[0] && (
                <div className="flex justify-center items-center py-4">
                  <ErrorMsg msg="No data found" />
                </div>
              )}
            {isPriError && (
              <div className="flex justify-center items-center py-4">
                <ErrorMsg msg={priError.message} />
              </div>
            )}
            {layoutData}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PrincipalMessage;
