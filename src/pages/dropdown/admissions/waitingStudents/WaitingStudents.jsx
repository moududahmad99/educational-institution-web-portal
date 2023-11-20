import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import ErrorMsg from "../../../../components/errorMsg/ErrorMsg";
import Spinner from "../../../../components/spinner/Spinner";
import { getAllNews } from "../../../../utills/getAllNews";
import WaitingStudentsTable from "./WaitingStudentsTable";

/* waiting student components */
const WaitingStudents = () => {
  const { data, isError, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      staleTime: Infinity,
      queryKey: ["admission_waiting_result"],
      queryFn: ({ pageParam }) =>
        getAllNews({
          page: pageParam,
          limit: 20,
          type: "admission waiting result",
        }),
      getNextPageParam: (lastPage) => {
        if (lastPage.payload.currentPage < lastPage.payload.totalPages) {
          return lastPage.payload.currentPage + 1;
        } else {
          return false;
        }
      },
    });

  const waitingStudentsData = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.payload.news];
  }, []);

  return (
    <React.Fragment>
      <div id="waitingStudents">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className="bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14 py-2">
            ভর্তি অপেক্ষমান শিক্ষার্থীর তালিকা
          </h3>
        </div>

        {/* ... */}
        <div className="border  bg-[#DBE8E960]">
          {isLoading ? (
            <Spinner />
          ) : isError ? (
            <ErrorMsg msg={error.message} />
          ) : waitingStudentsData?.length === 0 ? (
            <ErrorMsg msg="No data found" />
          ) : (
            <InfiniteScroll
              dataLength={waitingStudentsData.length}
              next={fetchNextPage}
              hasMore={hasNextPage}
              loader={<Spinner />}
              className="thin-scrollbar"
            >
              <WaitingStudentsTable data={waitingStudentsData} />
            </InfiniteScroll>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default WaitingStudents;
