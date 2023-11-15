import moment from "moment/moment";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { PiDownloadSimpleBold } from "react-icons/pi";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import { Link } from "react-router-dom";
import ErrorMsg from "../../../../components/errorMsg/ErrorMsg";
import Spinner from "../../../../components/spinner/Spinner";
import { getAllNews } from "../../../../utills/getAllNews";

const WaitingStudents = () => {
  /* 
    get  all the  data
  */
  const { data, isError, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      staleTime: Infinity,
      queryKey: ["admission_waiting_result"],
      queryFn: ({ pageParam }) =>
        getAllNews({
          page: pageParam,
          limit: 10,
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

  /* 
      store the all page data in the one array to scroll
      */
  const admission_waiting_result = data?.pages.reduce((acc, page) => {
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

        <div className="border vertical-scrollMain bg-[#DBE8E960]">
          {/* 
          render data
        */}
          {admission_waiting_result?.length > 0 && (
            <InfiniteScroll
              dataLength={
                admission_waiting_result?.length > 0
                  ? admission_waiting_result.length
                  : 0
              }
              next={fetchNextPage}
              hasMore={hasNextPage}
              loader={
                <div className="flex justify-center items-center py-4">
                  <Spinner />
                </div>
              }
            >
              <table className="border-collapse w-full vertical-scroll">
                <thead>
                  <tr className="bg-[#BBCDCD60]">
                    <th className="p-2 text-start w-3/12">প্রকাশের তারিখ</th>
                    <th className="p-2 text-start w-5/12">নোটিশ</th>
                    <th className="p-2 text-start w-2/12">ভিউ [PDF]</th>
                    <th className="p-2 text-start w-2/12">ডাউনলোড [PDF]</th>
                  </tr>
                </thead>

                <tbody>
                  {admission_waiting_result.map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="flex items-center pt-2">
                        <i className="p-2">
                          <BsFillCalendarDateFill />
                        </i>
                        <p className="py-2">
                          {moment(row.updatedAt).format("DD - MM - YYYY")}
                        </p>
                      </td>
                      <td className="p-2">
                        {row.title.split(/\s+/).slice(0, 8).join(" ") + "..."}
                      </td>
                      <td className="p-2">
                        <Link
                          to={`/notice/${row._id}`}
                          className="flex items-center"
                        >
                          {" "}
                          <i className="pr-1">
                            <AiFillEye />
                          </i>{" "}
                          View
                        </Link>
                      </td>
                      <td className="p-2">
                        <a
                          href={`#download-link-${index}`} //Todo: download task
                          className="py-2 flex items-center"
                        >
                          <i className="pr-1">
                            <PiDownloadSimpleBold />
                          </i>{" "}
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </InfiniteScroll>
          )}

          {/* 
          showing error messages and loading
          */}
          {isLoading && (
            <div className="flex justify-center items-center py-4">
              <Spinner />
            </div>
          )}
          {!isLoading && admission_waiting_result?.length === 0 && (
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
    </React.Fragment>
  );
};

export default WaitingStudents;
