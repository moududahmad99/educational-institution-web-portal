import React from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import { getAdministrators } from "../../utills/getAdministrators";
import ErrorMsg from "../errorMsg/ErrorMsg";
import Spinner from "../spinner/Spinner";
import "./About.css";

const About = () => {
  const profiles = [
    {
      name: "মোঃ হাসান রহমান",
      role: "অধ্যক্ষ",
      institution: "দানারহাট আনছারিয়া ফাজিল মাদ্রাসা, ঠাকুরগাঁও",
      link: "/administration/principal-message",
    },
    {
      name: "মোঃ আব্দুল মান্নান আহমেদ",
      role: "সভাপতি",
      institution: "দানারহাট আনছারিয়া ফাজিল মাদ্রাসা, ঠাকুরগাঁও",
      link: "/administration/president-message",
    },
  ];

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
                <p>
                  আমাদের স্কুল একটি গতিশীল এবং ব্যাপক শিক্ষা প্রতিষ্ঠান, যা একটি
                  আদর্শ উপস্থিতিতে অবস্থিত আছে একটি আদর্শ উপনগরে। এটি একটি
                  শান্তিপূর্ণ পরিবেশ প্রদান করে, যেখানে বিভিন্ন সংস্কৃতির
                  ছাত্র-ছাত্রী শিক্ষার পথে অগ্রগতি করতে পারে। আমাদের শিক্ষক দল
                  প্রতিশ্রুতিশীল এবং উচ্চ যোগ্যতাসম্পন্ন, যারা বিজ্ঞান থেকে
                  শিল্প প্রস্থান পর্যন্ত বিভিন্ন শাখা সম্পর্কে সম্পূর্ণ জ্ঞান
                  দেওয়ার চেষ্টা করে।
                  <br />
                  আমাদের স্কুলটি আধুনিক সংস্থান যা সম্পূর্ণ উপাদানে প্রতিষ্ঠিত
                  হলেও বিশেষ করে শিক্ষার্থীদের পুরস্কৃত করতে প্রদান করে, এটি
                  নিরন্তর শিক্ষা লাভ করার জন্য অবদান রাখে। এটি পড়াশোনা ছাড়াও
                  বিভিন্ন প্রকল্পে এক্টিভ থাকার সুযোগ দেয়, যার মাধ্যমে
                  শিক্ষার্থীরা ক্লাসরুমের বাইরে তাদের প্রশ্নাবলি খুজতে পারে
                  <br />
                  আমাদের শিক্ষার্থীদের নিরাপত্তা এবং ভালোবাসা গুরুত্বপূর্ণ, এবং
                  আমাদের প্রতিবদ্ধ কর্মী একটি নিরাপত্তা এবং আদরের পরিবেশ তৈরি
                  করতে কাজ করেন। এছাড়া, আমরা সমাজের সামগ্রিক প্রগতির জন্য ভাগ্য
                  পরার্ধ শক্তি দেওয়ার জন্য প্রতিশ্রুতি করি, যা নৈতিকতা এবং
                  জীবনজীবন শেখা প্রদান করতে পারে। আমাদের স্কুলটি যেহেতু একটি
                  গতিশীল প্রতিষ্ঠান, তাই আমরা শিক্ষার সাথে সাথে তার সাথে মোটর
                  কৌশল, ক্রিয়েটিভ শিল্প, সাংগঠনিক দক্ষতা, এবং পরিবেশে সামাজিক
                  সদয় তৈরি করা যেতে চেষ্টা করে। আমাদের শিক্ষা দানের মূখ্য
                  উদ্দেশ্য হলো আমাদের ছাত্র-ছাত্রীদের চিন্তা ক্ষমতা, সমাধানে
                  দক্ষতা, এবং সমস্যা সমাধানের দক্ষতা উন্নত করা, যাতে তারা সমৃদ্ধ
                  জীবনে সফল হতে পারে।
                  <br />
                  আমরা শিক্ষার্থীদের অগ্নিদগ্ধ শ্ক্ল নিয়ে গর্ব করি, এবং তাদের
                  প্রশাসন তাদের স্বকীয় লক্ষ্যের দিকে এগিয়ে যাওয়ার জন্য সাথে
                  থাকে। আমাদের শিক্ষকদের দায়িত্ব হলো শিক্ষার্থীদের প্রতিটি
                  ক্ষণে উন্নত করার সাথে তাদের মেটানো যায় সম্পূর্ণ সহানুভূতি এবং
                  সাহানুভূতি সম্পর্কে।
                  <br />
                  সমগ্রভাবে, আমরা আমাদের শিক্ষা প্রতিষ্ঠানে শিক্ষার জীবনমাধ্যমে
                  আদর্শ এবং উন্নতির পথ প্রদান করার দিকে প্রতিশ্রুতিবদ্ধ, এবং
                  আমরা সর্বদাই তাদের সাথে থাকতে উদ্দেশ্য করি।
                </p>
              </div>

              <div className="about-title bg-[#79929C] mt-4 pl-4 py-4 text-white text-lg">
                <h3>প্রতিষ্ঠানের লক্ষ্য ও উদ্দেশ্য</h3>
              </div>
              <div className="about-description p-4">
                <p>
                  আমাদের শিক্ষা প্রতিষ্ঠানের লক্ষ্য হলো শিক্ষার মাধ্যমে
                  শিক্ষার্থীদের জ্ঞান এবং আদর্শ প্রশাসন তৈরি করা, যাতে তারা
                  সমৃদ্ধ, সৃজনশীল, সম্পর্কশীল এবং সমাজে দায়িত্বশীল নাগরিক হতে
                  পারে। আমাদের স্কুল একটি গতিশীল এবং ব্যাপক শিক্ষা প্রতিষ্ঠান,
                  যা একটি আদর্শ উপস্থিতিতে অবস্থিত আছে একটি আদর্শ উপনগরে। এটি
                  একটি শান্তিপূর্ণ পরিবেশ প্রদান করে, যেখানে বিভিন্ন সংস্কৃতির
                  ছাত্র-ছাত্রী শিক্ষার পথে অগ্রগতি করতে পারে। আমাদের শিক্ষক দল
                  প্রতিশ্রুতিশীল এবং উচ্চ যোগ্যতাসম্পন্ন, যারা বিজ্ঞান থেকে
                  শিল্প প্রস্থান পর্যন্ত বিভিন্ন শাখা সম্পর্কে সম্পূর্ণ জ্ঞান
                  দেওয়ার চেষ্টা করে। আমরা আমাদের ছাত্র-ছাত্রীদেরকে নৈতিক মৌল্য,
                  সম্মান, সমরাস এবং সঠিক মানবিক মূল্যের প্রতি প্রশাসন করতে
                  শেখাই। আমরা শিক্ষা প্রদানের মাধ্যমে তাদের জ্ঞান, দক্ষতা এবং
                  সম্পর্কবিপ্লবে প্রস্তুত করে তোলার চেষ্টা করি, যা তাদেরকে
                  প্রযুক্তিগত ও নৈতিক দিকে সমৃদ্ধ ব্যক্তিত্ব হিসেবে পরিণত করতে
                  সাহায্য করে।
                </p>
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
