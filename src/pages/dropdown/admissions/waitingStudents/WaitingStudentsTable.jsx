// WaitingStudentsTable.js

import WaitingStudentCard from "./WaitingStudentCard";

const WaitingStudentsTable = ({ data }) => (
  <table className="border-collapse w-full min-w-[1000px]">
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
        <WaitingStudentCard key={index} row={row} />
      ))}
    </tbody>
  </table>
);

export default WaitingStudentsTable;
