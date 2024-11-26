import * as React from "react";
import { ClearInput } from "@/assets/svg";
import { AppContext } from "../../../Context";

export const InputMarkdown = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("Component must be used within an AppProvider");
  }
  const { inputMarkdown, setInputMarkdown, setOutputMarkdown } = context;
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMarkdown(e.target.value);
    setOutputMarkdown(e.target.value);
  };
  const handleClear=()=>{
    setInputMarkdown('')
    setOutputMarkdown('')
  }
  return (
    <div className="sm:w-[50%] mb-4 sm:mb-0">
      <div className="flex items-center gap-4 mb-6 h-[28px]">
        <p className="text-[#BDBDBD] font-semibold">Input:</p>
        <img
          src={ClearInput}
          alt="ClearInput"
          onClick={handleClear}
          className={inputMarkdown == "" ? "hidden" : ""}
        />
      </div>
      <textarea
        value={inputMarkdown}
        onChange={handleChange}
        name="input-html"
        id="input-html"
        className="sm:h-screen h-[50vh] w-full bg-[#1D1D1D] text-[#D7D7D7] p-4 resize-none focus:outline-none"
      />
    </div>
  );
};
