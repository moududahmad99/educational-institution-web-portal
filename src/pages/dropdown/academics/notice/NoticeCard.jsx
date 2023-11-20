import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../../utills/formatDate";

const NoticeCard = ({ notice }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-[#F1EFEF] flex m-2 cursor-pointer items-center"
      onClick={() => navigate(`/notice/${notice._id}`)}
    >
      <div className="notice-date flex items-center justify-center py-2 flex-col text-center text-white bg-[#79929C]">
        <h5 className="border-b number-font">
          {formatDate(notice.updatedAt).date}
        </h5>
        <h5 className="number-font">{formatDate(notice.updatedAt).year}</h5>
      </div>
      <div className="items-center flex pl-4 py-2 notice-desc">
        <h4>{notice.title}</h4>
      </div>
    </div>
  );
};

export default NoticeCard;
