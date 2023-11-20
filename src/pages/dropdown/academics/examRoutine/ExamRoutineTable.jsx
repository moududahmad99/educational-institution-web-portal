import ExamRoutineRow from "./ExamRoutineRow";

const ExamRoutineTable = ({ data }) => {
  return (
    <table className="border-collapse w-full vertical-scroll">
      <thead>
        <tr className="bg-[#BBCDCD60]">
          <th className="p-2 text-start min-w-max">প্রকাশের তারিখ</th>
          <th className="p-2 text-start min-w-max">নোটিশ</th>
          <th className="p-2 text-start min-w-max">ভিউ</th>
          <th className="p-2 text-start min-w-max">ডাউনলোড [PDF]</th>
          <th className="p-2 text-start min-w-max">ডাউনলোড [Img]</th>
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <ExamRoutineRow row={row} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default ExamRoutineTable;
