import * as React from "react";
import { AppContext } from "../../../Context";
import ReactMarkdown from "react-markdown";
import { Copy, OpenBrowser } from "@/assets/svg";

export const OutputMarkdown = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("Component must be used within an AppProvider");
  }
  const { outputMarkdown } = context;

  const openSnippet = () => {
    const blob = new Blob([outputMarkdown], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <div className="sm:w-[50%]">
      <div className="flex items-center gap-4 mb-6">
        <p className="text-[#BDBDBD] font-semibold">Output:</p>
        <div className="flex items-center gap-x-2">
          <img onClick={openSnippet} src={OpenBrowser} alt="" />
          <img
            src={Copy}
            alt="CopyButton"
            // onClick={() => navigator.clipboard.writeText(outputMarkdown)}
          />
        </div>
      </div>
      <pre className="sm:h-screen h-[50vh] overflow-auto w-full bg-white text-[#0B0B0B] p-4 focus:outline-none">
        <ReactMarkdown>{outputMarkdown}</ReactMarkdown>
      </pre>
    </div>
  );
};
