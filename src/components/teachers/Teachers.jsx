import React from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import { getAdministrators } from "../../utills/getAdministrators";
import ErrorMsg from "../errorMsg/ErrorMsg";
import Spinner from "../spinner/Spinner";
import "./Teachers.css";

const Teachers = () => {
  /* 
    get 4 teachers data
  */
  const {
    data: teachersData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getAdministrators({ limit: 4, role: "teacher" }),
    queryKey: ["teachers"],
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
              <picture>
                {teacher?.image?.url ? (
                  <img
                    src={teacher.image.url}
                    className="object-cover"
                    alt="profile"
                  />
                ) : (
                  <img
                    src={`/assets/profile.jpg`}
                    className="object-cover"
                    alt="profile"
                  />
                )}
              </picture>
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
        <div className="teachers-title mt-5">
          <h3 className="bg-[#79929C] text-white font-medium text-md p-4">
            আমাদের শিক্ষক
          </h3>
        </div>

        {teachers}

        <div className="my-8 text-end">
          <NavLink
            to="/administration/teachers"
            className="py-2 px-5 text-sm underline text-white font-medium bg-[#79929c]"
          >
            সকল শিক্ষক
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Teachers;
