import styles from "./marksSheet.module.css";

const StudentInfo = ({ result }) => {
  const { classTitle, examType, section, group, year, results } = result;
  return (
    <div className={`${styles.studentDetailsTable}`}>
      {/* <!-- title --> */}
      <h4 className="underline font-semibold text-lg my-2">
        স্টুডেন্ট ইনফোরমেশন
      </h4>
      <table className="table-auto w-full">
        <tr className="bg-white">
          <td className="font-semibold pr-4 w-2/12">নামঃ</td>
          <td>{results.name}</td>
        </tr>
        <tr className="mb-2 bg-white">
          <td className="font-semibold pr-4">রোলঃ</td>
          <td className="number-font">{results.roll}</td>
        </tr>
        <tr className="mb-2 bg-white">
          <td className="font-semibold pr-4">পরীক্ষাঃ</td>
          <td>{examType}</td>
        </tr>
        <tr className="mb-2 bg-white">
          <td className="font-semibold pr-4">শ্রেনীঃ</td>
          <td>{classTitle}</td>
        </tr>

        {section !== "None" && (
          <tr className="mb-2 bg-white">
            <td className="font-semibold pr-4">শাখা</td>
            <td>{section}</td>
          </tr>
        )}

        {group !== "None" && (
          <tr className="mb-2 bg-white">
            <td className="font-semibold pr-4">বিভাগ</td>
            <td>{group}</td>
          </tr>
        )}

        <tr className="mb-2 bg-white">
          <td className="font-semibold pr-4">বছর</td>
          <td>{year}</td>
        </tr>

        {results.GPA && (
          <tr className="mb-2 bg-white">
            <td className="font-semibold pr-4">GPA</td>
            <td>{results.GPA}</td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default StudentInfo;
