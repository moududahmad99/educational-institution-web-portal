import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import ErrorMsg from "../../../../components/errorMsg/ErrorMsg";
import Spinner from "../../../../components/spinner/Spinner";
import { getAdministrators } from "../../../../utills/getAdministrators";

const ManagementCommitte = () => {
  /* 
    get all  data
  */

  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } =
    useInfiniteQuery({
      staleTime: Infinity,
      queryKey: ["commite"],
      queryFn: ({ pageParam = 1 }) =>
        getAdministrators({
          limit: 10,
          page: pageParam,
          role: "others",
        }),
      getNextPageParam: (lastPage) => {
        if (lastPage.payload.currentPage < lastPage.payload.totalPages) {
          return lastPage.payload.currentPage + 1;
        } else {
          return false;
        }
      },
    });

  /* 
      resize the data
    */
  const commiteData = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.payload.administrators];
  }, []);

  return (
    <React.Fragment>
      <div id="managementCommitte">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className="bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14  py-2">
            পরিচালনা কমিটি
          </h3>
        </div>

        {/* 
          render the data
        */}
        {commiteData?.length > 0 && (
          <InfiniteScroll
            dataLength={commiteData?.length > 0 ? commiteData.length : 0}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={
              <div className="flex justify-center items-center py-4">
                <Spinner />
              </div>
            }
            className="teachers-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {commiteData.map((commite, index) => (
              <div
                key={index}
                className="teachers-card p-4 bg-[#FFFFFF] shadow my-3 flex flex-col items-center"
              >
                <div className="teachers-card-img my-4">
                  {commite?.image?.url ? (
                    <picture>
                      <img src={commite.image.url} alt="profile" />
                    </picture>
                  ) : (
                    <picture>
                      <img src={"/assets/profile.jpg"} alt="profile" />
                    </picture>
                  )}
                </div>
                <div className="teachers-card-identity">
                  <h4 className="font-medium text-md">{commite.name}</h4>
                  <h5>{commite.position}</h5>
                  {commite?.phone && <h5>মোবাইল: {commite.phone}</h5>}
                  <h6>{commite.institution}</h6>
                </div>
              </div>
            ))}
          </InfiniteScroll>
        )}

        {/* 
          showing the error message and loading
        */}
        {isLoading && (
          <div className="flex justify-center items-center py-4">
            <Spinner />
          </div>
        )}
        {!isLoading && commiteData?.length === 0 && (
          <div className="flex justify-center items-center py-4">
            <ErrorMsg msg="No data found" />
          </div>
        )}
        {isError && (
          <div className="flex justify-center items-center py-4">
            <ErrorMsg msg={error.message} />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ManagementCommitte;
