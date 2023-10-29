import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useQuery } from "react-query";
import ErrorMsg from "../../../../components/errorMsg/ErrorMsg";
import Spinner from "../../../../components/spinner/Spinner";
import { getAdministrators } from "../../../../utills/getAdministrators";

const OurTeachers = () => {
  const [limit] = useState(8);
  const [page, setPage] = useState(1);

  const handlePageClick = (selected) => {
    setPage(selected.selected + 1);
  };

  /* 
    get all teachers data
  */
  const {
    data: teachersData,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryFn: () =>
      getAdministrators({
        limit: parseInt(limit),
        role: "teacher",
        page: parseInt(page),
      }),
    queryKey: ["teachers", { page, limit }],
    staleTime: Infinity,
  });

  /* 
    render Teachers profile
  */
  let teachers;
  if (isLoading) {
    teachers = (
      <div>
        <Spinner />
      </div>
    );
  } else if (!isLoading && isError) {
    teachers = <ErrorMsg msg={error.message} />;
  } else if (
    !isLoading &&
    !isError &&
    teachersData?.payload.administrators.length === 0
  ) {
    teachers = <ErrorMsg msg={"No data found"} />;
  } else if (
    !isLoading &&
    !isError &&
    teachersData?.payload.administrators.length > 0
  ) {
    teachers = (
      <div className="teachers-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {teachersData?.payload.administrators.map((teacher, index) => (
          <div
            key={index}
            className="teachers-card p-4 bg-[#FFFFFF] shadow my-3 flex flex-col items-center"
          >
            <div className="teachers-card-img my-4">
              {teacher?.image ? (
                <picture>
                  <img src={teacher.image.url} alt="profile" />
                </picture>
              ) : (
                <picture>
                  <img src={"/assets/profile.jpg"} alt="profile" />
                </picture>
              )}
            </div>
            <div className="teachers-card-identity">
              <h4 className="font-medium text-md">{teacher.name}</h4>
              <h5>{teacher.position}</h5>
              <h6>{teacher.institution}</h6>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <React.Fragment>
      <div id="teachers">
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">
          <h3 className="bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14 py-2">
            শিক্ষকবৃন্দ
          </h3>
          {/* <p className='text-md font-medium mt-2'>home / administration / <span className='text-red-800'> teachers</span></p> */}
        </div>

        {teachers}

        {isSuccess && (
          <ReactPaginate
            previousLabel={"Pre"}
            nextLabel={"Next"}
            pageCount={teachersData?.payload?.totalPages}
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
        )}
      </div>
    </React.Fragment>
  );
};

export default OurTeachers;
