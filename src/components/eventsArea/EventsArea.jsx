import React from "react";
import { useQuery } from "react-query";
import { Link, NavLink } from "react-router-dom";
import { formatDate } from "../../utills/formatDate";
import { getAllNews } from "../../utills/getAllNews";
import ErrorMsg from "../errorMsg/ErrorMsg";
import Spinner from "../spinner/Spinner";

const EventsArea = () => {
  /* 
    get leatest 4 events data
  */
  const {
    data: eventsData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getAllNews({ limit: 4, type: "event" }),
    queryKey: ["topEvents"],
    staleTime: Infinity,
  });

  /* 
    render events
  */
  let renderEvents;
  if (isLoading) {
    renderEvents = (
      <div className="py-4 flex justify-center items-center">
        <Spinner />
      </div>
    );
  } else if (!isLoading && isError) {
    renderEvents = (
      <div className="py-4 flex justify-center items-center">
        <ErrorMsg msg={error.mesage} />
      </div>
    );
  } else if (!isLoading && !isError && eventsData?.payload?.news.length === 0) {
    <div className="py-4 flex justify-center items-center">
      <ErrorMsg msg={"No data found"} />
    </div>;
  } else if (!isLoading && !isError && eventsData?.payload?.news.length > 0) {
    renderEvents = (
      <div className="events-wrapper my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {eventsData?.payload?.news.map((event) => (
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
                className="px-4 text-sm py-1 underline text-dark-400 font-medium bg-[#C6D6D6]"
              >
                বিস্তারিত
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <React.Fragment>
      <div id="events">
        <div className="teachers-title mt-5">
          <h3 className="bg-[#79929C] text-white font-medium text-md p-4">
            ইভেন্টস
          </h3>
        </div>

        {renderEvents}

        {/* All Event Button */}
        <div className="my-8 text-end">
          <NavLink
            to="/gallery/events"
            className="py-2 px-5 text-sm  underline text-white font-medium bg-[#79929c]"
          >
            সব ইভেন্ট
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventsArea;
