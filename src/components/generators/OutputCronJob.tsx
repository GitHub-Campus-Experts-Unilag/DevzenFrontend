import React, { useState } from "react";
import { Input } from "../ui/input";
import { Copy } from "@/assets/svg";
import { copyToClipboard } from "@/lib/utils";

type OutputCronProps = {
  outputValue: string;
  error: string;
};

export const OutputCronJob: React.FC<OutputCronProps> = ({
  outputValue,
  error,
}) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="mt-6 w-1/2 ml-5">
      <div className="flex items-center gap-4 mb-6 h-[28px]">
        <p className="text-[#BDBDBD] font-semibold">Output:</p>
        <img
          src={Copy}
          alt="Copy to clipboard"
          onClick={(e) => copyToClipboard(outputValue, setCopied, e)}
          className={outputValue === "" ? "hidden" : ""}
        />
        {copied && (
          <p className="text-green-500 text-sm ml-2">Copied to clipboard!</p>
        )}
      </div>
      {error ? (
        <Input
          type="text"
          value={error}
          readOnly
          className="text-red-500 font-semibold"
        />
      ) : (
        <p className="text-[#D7D7D7] font-semibold">
          <Input type="text" value={outputValue} readOnly />
          {/* Parsed Output: {outputValue} */}
        </p>
      )}
    </div>
  );
};
