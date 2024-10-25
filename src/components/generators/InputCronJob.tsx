import React from "react";
import cronParser from "cron-parser";
import { ClearInput } from "@/assets/svg";

type InputProps = {
  inputValue: string;
  outputValue: string;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setOutputValue: React.Dispatch<React.SetStateAction<string>>;
};

export const InputCronJob: React.FC<InputProps> = ({
  inputValue,
  setInputValue,
  setOutputValue,
  setError,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    try {
      const interval = cronParser.parseExpression(value);
      setOutputValue(interval.next().toString());
      setError("");
    } catch {
      setOutputValue("");
      setError("Invalid cron expression");
    }
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setInputValue(value);

  //   try {
  //     const interval = cronParser.parseExpression(value);
  //     // Get the next 5 occurrences
  //     const occurrences = [];
  //     for (let i = 0; i < 5; i++) {
  //       occurrences.push(interval.next().toString());
  //     }
  //     setOutputValue(occurrences.join("\n")); // Join occurrences with a newline for better display
  //     setError("");
  //   } catch {
  //     setOutputValue("");
  //     setError("Invalid cron expression");
  //   }
  // };

  const clearInput = () => {
    setInputValue("");
    setOutputValue("");
    setError("");
  };

  return (
    <section className="w-[50%] ml-5">
      <div className="flex items-center gap-4 mb-6 h-[28px]">
        <p className="text-[#BDBDBD] font-semibold">Input:</p>
        <img
          src={ClearInput}
          alt="ClearInput"
          onClick={clearInput}
          className={inputValue === "" ? "hidden" : ""}
        />
      </div>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        className="h-[44px] w-full bg-[#1D1D1D] text-[#D7D7D7] p-4 focus:outline-none"
        placeholder="* * * * *"
      />
    </section>
  );
};
