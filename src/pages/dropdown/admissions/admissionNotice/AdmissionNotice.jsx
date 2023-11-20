import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import ErrorMsg from "../../../../components/errorMsg/ErrorMsg";
import Spinner from "../../../../components/spinner/Spinner";
import { getAllNews } from "../../../../utills/getAllNews";
import AdmissionNoticeTable from "./AdmissionNoticeTable";

const AdmissionNotice = () => {
  /* 
    get  all the  data
  */
  const { data, isError, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      staleTime: Infinity,
      queryKey: ["admission_circular"],
      queryFn: ({ pageParam }) =>
        getAllNews({ page: pageParam, limit: 10, type: "admission circular" }),
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
  const admission_circular_data = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.payload.news];
  }, []);

  return (
    <div id="admissionNotice">
      <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
        <h3 className="bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14 py-2">
          ভর্তি বিজ্ঞপ্তি
        </h3>
      </div>

      {/* 
      render data
    */}
      <div className="border  bg-[#DBE8E960]">
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <ErrorMsg msg={error.message} />
        ) : admission_circular_data?.length === 0 ? (
          <ErrorMsg msg="No data found" />
        ) : (
          <InfiniteScroll
            dataLength={admission_circular_data.length}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<Spinner />}
            className="thin-scrollbar"
          >
            <AdmissionNoticeTable data={admission_circular_data} />
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default AdmissionNotice;
