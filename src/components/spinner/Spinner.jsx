import React from "react";
import styles from "./spinner.module.css";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <span className={`${styles.loader}`}></span>;
    </div>
  );
};

export default Spinner;
