import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import ErrorMsg from "../../../../components/errorMsg/ErrorMsg";
import Spinner from "../../../../components/spinner/Spinner";
import { getAllNews } from "../../../../utills/getAllNews";
import AdmissionExamSyllabusTable from "./AdmissionExamSyllabusTable";

const AdmissionExamSyllabus = () => {
  /* 
    get  all the  data
  */
  const { data, isError, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      staleTime: Infinity,
      queryKey: ["admission_syllabus"],
      queryFn: ({ pageParam }) =>
        getAllNews({ page: pageParam, limit: 10, type: "admission syllabus" }),
      getNextPageParam: (lastPage) => {
        if (lastPage.payload.currentPage < lastPage.payload.totalPages) {
          return lastPage.payload.currentPage + 1;
        } else {
          return false;
        }
      },
    });

  /* 
      store the all page data in the one array to scroll infinitely
    */
  const admission_syllabus_data = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.payload.news];
  }, []);

  return (
    <React.Fragment>
      <div id="admissionExamSyllabus">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className="bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14 py-2">
            ভর্তি পরিক্ষার সিলেবাস
          </h3>
        </div>

        {/* render data */}
        <div className="border  bg-[#DBE8E960]">
          {isLoading ? (
            <Spinner />
          ) : isError ? (
            <ErrorMsg msg={error.message} />
          ) : admission_syllabus_data?.length === 0 ? (
            <ErrorMsg msg="No data found" />
          ) : (
            <InfiniteScroll
              dataLength={admission_syllabus_data.length}
              next={fetchNextPage}
              hasMore={hasNextPage}
              loader={<Spinner />}
              className="thin-scrollbar"
            >
              <AdmissionExamSyllabusTable data={admission_syllabus_data} />
            </InfiniteScroll>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdmissionExamSyllabus;
