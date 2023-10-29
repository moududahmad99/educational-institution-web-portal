import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../../components/spinner/Spinner";
import { formatDate } from "../../../../utills/formatDate";
import { getAllNews } from "../../../../utills/getAllNews";

const Notice = () => {
  const [limit] = useState(20);
  const [page, setPage] = useState(1);

  // const handlePageClick = (selected) => {
  //   setPage(selected.selected + 1);
  // };
  const navigate = useNavigate();

  /* 
    get the argent notice
  */
  const {
    data: notices,
    isLoading,
    isSuccess,
  } = useQuery({
    queryFn: () => getAllNews({ limit: limit, page }),
    queryKey: ["allNews", { limit, page }],
    staleTime: Infinity,
  });

  let renderNotice;
  if (isLoading) {
    renderNotice = (
      <div className="py-4 flex justify-center items-center">
        <Spinner />
      </div>
    );
  } else if (!isLoading && notices?.payload?.news.length > 0) {
    renderNotice = (
      <div>
        {notices?.payload?.news?.map((notice, index) => (
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
      </div>
    );
  }
  return (
    <div id="notice">
      <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
        <h3 className="bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14  py-2">
          নোটিশ
        </h3>
        {/* <p className="text-md font-medium mt-2">
          home / academics /<span className="text-red-800"> notice</span>
        </p> */}
      </div>

      <div className="py-5 bg-[#FFFFFF] mt-4 sm:mt-0 shadow-lg">
        {renderNotice}
      </div>
      {/* {isSuccess && (
        <ReactPaginate
          previousLabel={"Pre"}
          nextLabel={"Next"}
          pageCount={notices?.payload?.totalPages}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center my-4"
          pageClassName="mx-2"
          pageLinkClassName="py-2 px-4 rounded-lg border hover:bg-blue-500 hover:text-white transition-colors"
          previousClassName="mr-2"
          nextClassName="ml-2"
          previousLinkClassName="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          nextLinkClassName="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          activeClassName="bg-blue-500 text-white rounded-lg"
        />
      )} */}
    </div>
  );
};

export default Notice;
