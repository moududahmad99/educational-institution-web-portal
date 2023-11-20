/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useRef } from "react";
import { useQuery } from "react-query";
import { Link, NavLink } from "react-router-dom";
import { getAllNews } from "../../utills/getAllNews";
import "./News.css";

const News = () => {
  const marqueeRef = useRef(null);

  const handleMouseOver = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseOut = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  /* 
    get the argent notice
  */
  const {
    data: newses,
    isLoading,
    isSuccess,
  } = useQuery({
    queryFn: () => getAllNews({ priority: "urgent", limit: 10 }),
    queryKey: ["argentNews"],
    staleTime: Infinity,
  });

  let newsContent = "";
  if (!isLoading && isSuccess && newses?.payload?.news.length > 0) {
    newsContent = newses?.payload?.news.map((n) => (
      <li key={n._id} className="mx-2 list-square">
        <Link to={`/notice/${n._id}`} className="">
          {n.title}
        </Link>
      </li>
    ));
  }

  return (
    <React.Fragment>
      {!isLoading && isSuccess && newses?.payload?.news.length > 0 && (
        <div id="news" className="bg-[#FFFFFF] flex w-full my-2 items-center">
          <div className="news-header">
            <h4 className="bg-[#79929C] text-white p-2 mr-1 flex">
              <span className="hidden md:block gulo">জরুরী- </span> নিউজ
            </h4>
          </div>

          {!isLoading && isSuccess && (
            <marquee
              ref={marqueeRef}
              behavior="scroll"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              direction="left"
            >
              <div className="flex">{newsContent}</div>
            </marquee>
          )}
          <NavLink
            to="/academics/notice"
            className="bg-[#79929C] p-2 text-white flex underline"
          >
            সব <span className="hidden md:block ">গুলো</span>{" "}
          </NavLink>
        </div>
      )}
    </React.Fragment>
  );
};

export default News;
