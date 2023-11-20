import moment from "moment/moment";
import { AiFillEye } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { downloadFileFromUrl } from "../../../../utills/downloadFileFromURL";

const AdmissionExamSyllabusRow = ({ row }) => {
  return (
    <tr className="border-b">
      <td className="flex items-center pt-2">
        <i className="p-2">
          <BsFillCalendarDateFill />
        </i>
        <p className="py-2">{moment(row.updatedAt).format("DD - MM - YYYY")}</p>
      </td>
      <td className="p-2">
        {row.title.split(/\s+/).slice(0, 13).join(" ") + "..."}
      </td>
      <td className="p-2">
        <Link to={`/notice/${row._id}`} className="flex items-center">
          {" "}
          <i className="pr-1">
            <AiFillEye />
          </i>{" "}
          View
        </Link>
      </td>
      <td className="p-2">
        {row?.pdf?.url && (
          <button
            onClick={() => downloadFileFromUrl(row.pdf.url)}
            className="py-2 flex items-center"
          >
            <i className="pr-1">
              <PiDownloadSimpleBold />
            </i>
            Download
          </button>
        )}
      </td>
      <td className="p-2">
        {row?.image?.url && (
          <button
            onClick={() => downloadFileFromUrl(row.image.url)}
            className="py-2 flex items-center"
          >
            <i className="pr-1">
              <PiDownloadSimpleBold />
            </i>
            Download
          </button>
        )}
      </td>
    </tr>
  );
};

export default AdmissionExamSyllabusRow;
