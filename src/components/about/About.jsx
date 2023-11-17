import React from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import { getAdministrators } from "../../utills/getAdministrators";
import ErrorMsg from "../errorMsg/ErrorMsg";
import MessageData from "../messageData/MessageData";
import Spinner from "../spinner/Spinner";
import "./About.css";

const About = () => {
  /* 
    get অধ্যক্ষ teachers data
  */
  const {
    data: principalTeacherData,
    isLoading: isPriTLoading,
    isError: isPriError,
    error: priError,
  } = useQuery({
    queryFn: () =>
      getAdministrators({ limit: 1, role: "teacher", position: "অধ্যক্ষ" }),
    queryKey: ["principal"],
    staleTime: Infinity,
  });

  /* 
    get সভাপতি teachers data
  */
  const {
    data: presidentTeacherData,
    isLoading: isPreTLoading,
    isError: isPreError,
    error: preError,
  } = useQuery({
    queryFn: () =>
      getAdministrators({ limit: 1, role: "others", position: "সভাপতি" }),
    queryKey: ["president"],
    staleTime: Infinity,
  });

  /* 
    অধ্যক্ষ teachers informations
  */
  let renderPricipalTeacher;
  if (isPriTLoading) {
    renderPricipalTeacher = (
      <div>
        <Spinner />
      </div>
    );
  } else if (!isPriTLoading && isPriError) {
    renderPricipalTeacher = <ErrorMsg msg={priError.message} />;
  } else if (
    !isPriTLoading &&
    !isPriError &&
    principalTeacherData?.payload.administrators.length === 0
  ) {
    renderPricipalTeacher = <ErrorMsg msg={"No data found of অধ্যক্ষ"} />;
  } else if (
    !isPriTLoading &&
    !isPriError &&
    principalTeacherData?.payload.administrators.length > 0
  ) {
    const { name, institution, image, position } =
      principalTeacherData?.payload.administrators[0];
    renderPricipalTeacher = (
      <div className="aboutProfile p-4 bg-[#FFFFFF] shadow my-3 flex flex-col items-center">
        <div className="aboutProfile-img my-4">
          <picture>
            {image?.url ? (
              <img src={image.url} className="object-cover" alt="profile" />
            ) : (
              <img
                src={`/assets/profile.jpg`}
                className="object-cover"
                alt="profile"
              />
            )}
          </picture>
        </div>

        <div className="aboutProfile-identity">
          <h4 className="font-medium text-md">{name}</h4>
          <h5>{position}</h5>
          <h6>{institution}</h6>
        </div>

        <div className="aboutProfile-button text-white mt-5">
          <NavLink to={`/administration/principal-message`}>বিস্তারিত</NavLink>
        </div>
      </div>
    );
  }

  /* 
    সভাপতি teachers informations
  */
  let renderPresidentTeacher;
  if (isPreTLoading) {
    renderPresidentTeacher = (
      <div>
        <Spinner />
      </div>
    );
  } else if (!isPreTLoading && isPreError) {
    renderPresidentTeacher = <ErrorMsg msg={preError.message} />;
  } else if (
    !isPreTLoading &&
    !isPreError &&
    presidentTeacherData?.payload.administrators.length === 0
  ) {
    renderPresidentTeacher = <ErrorMsg msg={"No data found of সভাপতি"} />;
  } else if (
    !isPreTLoading &&
    !isPreError &&
    presidentTeacherData?.payload.administrators.length > 0
  ) {
    const { name, institution, image, position } =
      presidentTeacherData?.payload.administrators[0];
    renderPresidentTeacher = (
      <div className="aboutProfile p-4 bg-[#FFFFFF] shadow my-3 flex flex-col items-center">
        <div className="aboutProfile-img my-4">
          <picture>
            {image?.url ? (
              <img src={image.url} className="object-cover" alt="profile" />
            ) : (
              <img
                src={`/assets/profile.jpg`}
                className="object-cover"
                alt="profile"
              />
            )}
          </picture>
        </div>

        <div className="aboutProfile-identity">
          <h4 className="font-medium text-md">{name}</h4>
          <h5>{position}</h5>
          <h6>{institution}</h6>
        </div>

        <div className="aboutProfile-button text-white mt-5">
          <NavLink to={`/administration/president-message`}>বিস্তারিত</NavLink>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div id="about" className="mt-5">
        <div className="about-wrapper grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
          <div className="about-inner grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 col-span-2 ">
            <div className="bg-[#FFFFFF90] my-3">
              <div className="about-title bg-[#79929C] pl-4 py-4 text-white text-lg">
                <h3>প্রতিষ্ঠান সম্পর্কে</h3>
              </div>
              <div className="about-description p-4">
                <MessageData type={"about_institution"} />
              </div>

              <div className="about-title bg-[#79929C] mt-4 pl-4 py-4 text-white text-lg">
                <h3>প্রতিষ্ঠানের লক্ষ্য ও উদ্দেশ্য</h3>
              </div>
              <div className="about-description p-4">
                <MessageData type={"institution_objective"} />
              </div>
            </div>
          </div>

          <div className="about-inner sm:col-span-2 lg:col-span-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
            {renderPricipalTeacher}
            {renderPresidentTeacher}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
