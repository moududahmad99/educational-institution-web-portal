import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import ErrorMsg from "../../../../components/errorMsg/ErrorMsg";
import Spinner from "../../../../components/spinner/Spinner";
import { formatDate } from "../../../../utills/formatDate";
import { getAllNews } from "../../../../utills/getAllNews";

const Notice = () => {
  const navigate = useNavigate();

  /* 
    get the argent notice
  */
  const { data, isLoading, fetchNextPage, hasNextPage, isError, error } =
    useInfiniteQuery({
      queryKey: ["allNews"],
      staleTime: Infinity,
      queryFn: ({ pageParam = 1 }) =>
        getAllNews({ limit: 10, page: pageParam }),
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
  const notices = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.payload.news];
  }, []);

  return (
    <div id="notice">
      <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
        <h3 className="bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14  py-2">
          নোটিশ
        </h3>
      </div>

      {/* 
        render the data
      */}
      <div className="py-5 bg-[#FFFFFF] mt-4 sm:mt-0 shadow-lg">
        {notices?.length > 0 && (
          <InfiniteScroll
            dataLength={notices?.length > 0 ? notices.length : 0}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={
              <div className="flex justify-center items-center py-4">
                <Spinner />
              </div>
            }
          >
            {notices?.map((notice, index) => (
              <div
                className="bg-[#F1EFEF] flex m-2 cursor-pointer items-center"
                onClick={() => navigate(`/notice/${notice._id}`)}
                key={index}
              >
                <div className="notice-date flex items-center justify-center py-2 flex-col text-center text-white bg-[#79929C]">
                  <h5 className="border-b number-font">
                    {formatDate(notice.updatedAt).date}
                  </h5>
                  <h5 className="number-font">
                    {formatDate(notice.updatedAt).year}
                  </h5>
                </div>
                <div className="items-center flex pl-4 py-2 notice-desc">
                  <h4>{notice.title}</h4>
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
        {!isLoading && notices?.length === 0 && (
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
    </div>
  );
};

export default Notice;
