import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { formatDate } from "../../utills/formatDate";
import { getAllNews } from "../../utills/getAllNews";
import Spinner from "../spinner/Spinner";

const NoticeBord = () => {
  const navigate = useNavigate();
  /* 
    get the leatest 10 notice
  */
  const { data: notices, isLoading } = useQuery({
    queryFn: () => getAllNews({ limit: 10 }),
    queryKey: ["news"],
    staleTime: Infinity,
  });

  /* 
      render the notice
    */
  let renderNotice;
  if (isLoading) {
    renderNotice = (
      <div className="flex items-center justify-center py-4">
        <Spinner />
      </div>
    );
  } else if (!isLoading && notices?.payload?.news.length > 0) {
    renderNotice = (
      <div className="banner-rightNotice max-h-72 sm:max-h-72 md:max-h-72 lg:max-h-44 xl:max-h-72">
        {notices?.payload?.news.map((notice, index) => (
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
            <div className="items-center notice-desc flex px-4 py-2">
              <h4>{notice.title}</h4>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-16 lg:pb-16 bg-[#FFFFFF] banner-right mt-4 sm:mt-0 shadow-lg">
      <h2 className="bg-[#79929C] text-center mb-2 py-4 text-white text-md shadow-lg">
        নোটিশ বোর্ড
      </h2>

      {renderNotice}

      <div className="mt-5 absolute bottom-1 right-0 mb-3 mr-2 text-end">
        <Link
          to="/academics/notice"
          className="py-2 px-5 text-sm  underline text-white font-medium bg-[#79929c]"
        >
          সকল নোটিশ
        </Link>
      </div>
    </div>
  );
};

export default NoticeBord;
