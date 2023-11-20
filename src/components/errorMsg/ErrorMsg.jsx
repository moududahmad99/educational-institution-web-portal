import React from "react";

const ErrorMsg = ({ msg = "" }) => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="text-center w-full px-2 py-1 bg-red-300 text-red-600 rounded-sm">
        {msg}
      </div>
    </div>
  );
};

export default ErrorMsg;
