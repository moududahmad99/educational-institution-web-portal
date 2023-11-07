import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import { Link } from "react-router-dom";
import ErrorMsg from "../../../../components/errorMsg/ErrorMsg";
import Spinner from "../../../../components/spinner/Spinner";
import { formatDate } from "../../../../utills/formatDate";
import { getAllNews } from "../../../../utills/getAllNews";

const Events = () => {
  /* 
    get all events notice
  */
  const { data, isLoading, fetchNextPage, hasNextPage, isError, error } =
    useInfiniteQuery({
      queryKey: ["allEventsNews"],
      staleTime: Infinity,
      queryFn: ({ pageParam = 1 }) =>
        getAllNews({ limit: 10, page: pageParam, type: "event" }),
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
  const eventsNotices = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.payload.news];
  }, []);

  return (
    <React.Fragment>
      <div id="events">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className="bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14 py-2">
            ইভেন্টস
          </h3>
        </div>

        {/* 
          render data
        */}
        {eventsNotices?.length > 0 && (
          <InfiniteScroll
            dataLength={eventsNotices?.length > 0 ? eventsNotices.length : 0}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={
              <div className="flex justify-center items-center py-4">
                <Spinner />
              </div>
            }
            className="events-wrapper my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {eventsNotices.map((event) => (
              <div
                key={event._id}
                className="events-inner my-4 shadow bg-[#FAFAFA]"
              >
                <div className=" relative">
                  {event?.image?.url ? (
                    <img
                      src={event?.image.url}
                      alt="events"
                      className="object-cover relative h-64 w-full"
                    />
                  ) : (
                    <img
                      src={"/assets/event.jpg"}
                      alt="events"
                      className="object-cover relative h-64 w-full"
                    />
                  )}
                </div>
                <h3 className="p-4 text-md font-medium">{event.title}</h3>

                <p className="number-font font-normal py-2 px-4">{`${
                  formatDate(event.updatedAt).date
                } ${formatDate(event.updatedAt).year}`}</p>

                <div className="py-4 text-end pr-2">
                  <Link
                    to={`/notice/${event._id}`}
                    className="px-4 text-sm py-1 underline text-white font-medium bg-[#ABBFBF]"
                  >
                    বিস্তারিত
                  </Link>
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
        {!isLoading && eventsNotices?.length === 0 && (
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

export default Events;
