import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import ErrorMsg from "../../../../components/errorMsg/ErrorMsg";
import Spinner from "../../../../components/spinner/Spinner";
import { getAllNews } from "../../../../utills/getAllNews";
import NoticeList from "./NoticeList";

const Notice = () => {
  /* 
    get all notice
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

      {/* render data */}
      <div className="border  bg-[#DBE8E960]">
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <ErrorMsg msg={error.message} />
        ) : notices?.length === 0 ? (
          <ErrorMsg msg="No data found" />
        ) : (
          <InfiniteScroll
            dataLength={notices.length}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<Spinner />}
          >
            <NoticeList data={notices} />
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default Notice;
