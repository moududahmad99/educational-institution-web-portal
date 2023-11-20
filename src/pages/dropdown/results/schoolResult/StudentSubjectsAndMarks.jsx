import { calculateGrade } from "../../../../utills/calculateGrade";
import styles from "./marksSheet.module.css";

const StudentSubjectsAndMarks = ({ result }) => {
  const { results } = result;
  return (
    <div className={`${styles.marksheetMainPart} mt-10`}>
      <h4 className="underline font-semibold text-lg my-2">মার্কশীট</h4>
      <table className="w-full bg-white">
        {/* <!-- title --> */}

        {/* <!-- Head --> */}
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-100 text-left">ক্রমিক নম্বর</th>
            <th className="px-6 py-3 bg-gray-100 text-left">সাবজেক্ট</th>
            <th className="px-6 py-3 bg-gray-100 text-left">মার্ক</th>
            <th className="px-6 py-3 bg-gray-100 text-left">গ্রেড</th>
          </tr>
        </thead>

        {/* <!-- Body --> */}

        <tbody>
          {Object.keys(results.subjects).map(
            (subject, index) =>
              // Skip rendering if the key is "_id"
              subject !== "_id" && (
                <tr key={index}>
                  <td className="px-6 py-4 w-2/12">{index + 1}</td>
                  <td className="px-6 py-4">{subject}</td>
                  <td className="px-6 py-4">{results.subjects[subject]}</td>
                  <td className="px-6 py-4">
                    {calculateGrade(results.subjects[subject])}
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentSubjectsAndMarks;
