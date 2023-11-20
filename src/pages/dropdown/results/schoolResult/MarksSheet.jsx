import InstitutionInfo from "./InstitutionInfo";
import StudentInfo from "./StudentInfo";
import StudentSubjectsAndMarks from "./StudentSubjectsAndMarks";
import styles from "./marksSheet.module.css";
const MarksSheet = ({ result, handleResult }) => {
  return (
    <div className="flex">
      <div className="container mx-auto px-4 pb-4">
        <InstitutionInfo />

        {/* <!-- Title --> */}
        <div className={`${styles.marksheetTitle}`}>
          <h1 className="my-8 text-xl p-4 text-center font-semibold">
            মার্কশীট
          </h1>
        </div>

        {/* <!-- Students Details --> */}
        <StudentInfo result={result} />

        {/* <!-- Marksheet Part --> */}
        <StudentSubjectsAndMarks result={result} />

        {/* submit btn */}
        <div className="text-center mt-8 text-black">
          <button
            onClick={() => handleResult(false)}
            type="button"
            className={`bg-[#c5dfe77a] px-12 py-4 ${"cursor-pointer"}`}
          >
            অন্য ফলাফল দেখুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarksSheet;
