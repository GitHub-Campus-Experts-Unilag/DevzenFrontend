type OutputProps = {
  inputValue: string
  outputValue: string
  setOutputValue: React.Dispatch<React.SetStateAction<string>>
}
import * as React from 'react';
import DOMPurify from "dompurify";
import { Copy, OpenBrowser } from "@/assets/svg";

export const OutputHtmlPreview = ({ inputValue, setOutputValue, outputValue }: OutputProps) => {
  const outputRef = React.useRef<HTMLDivElement>(null)
  if (outputRef.current) {
    setOutputValue(outputRef.current.innerHTML)
  }

  const sanitizedInputHtml = DOMPurify.sanitize(inputValue);

  const openSnippet = () => {
    const blob = new Blob([sanitizedInputHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank")
  }


  return (
    <div className="sm:w-[50%]">
      <div className="flex items-center gap-4 mb-6">
        <p className="text-[#BDBDBD] font-semibold">Output:</p>
        <div className="flex items-center gap-x-2">
          <img onClick={openSnippet} src={OpenBrowser} alt="" />
          <img src={Copy} alt="CopyButton" onClick={() => navigator.clipboard.writeText(outputValue)} />
        </div>
      </div>
      <div
        ref={outputRef}
        className="sm:h-screen h-[50vh] overflow-auto w-full bg-[#1D1D1D] text-[#D7D7D7] p-4 focus:outline-none"
        dangerouslySetInnerHTML={{ __html: sanitizedInputHtml }}
      />
    </div>
  )
}
