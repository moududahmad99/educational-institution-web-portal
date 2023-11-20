import NoticeCard from "./NoticeCard";

const NoticeList = ({ data }) => {
  return (
    <>
      {data?.map((notice, index) => (
        <NoticeCard key={index} notice={notice} />
      ))}
    </>
  );
};

export default NoticeList;
