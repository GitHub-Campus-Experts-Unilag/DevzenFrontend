import * as React from "react";
import { ClearInput, GeneralSql } from "@/assets/svg";
import { AppContext } from "../../../Context";

const InputSqlFormatter = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("Component must be used within an AppProvider");
  }
  const { inputSql, setInputSql,setOutputSql  } = context;
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputSql(e.target.value);
    setOutputSql(e.target.value)
  };
  return (
    <div className="sm:w-[50%] mb-4 sm:mb-0">
      <div className="flex items-center gap-4 mb-6 h-[28px]">
        <p className="text-[#BDBDBD] font-semibold">Input:</p>
        <img src={GeneralSql} alt="GeneralSql" />
        <img src={ClearInput} alt="ClearInput" />
      </div>
      <textarea
        name=""
        value={inputSql}
        onChange={handleInput}
        id=""
        className="sm:h-screen h-[50vh] w-full bg-[#1D1D1D] text-[#D7D7D7] p-4 focus:outline-none"
      />
    </div>
  );
};

export default InputSqlFormatter;
