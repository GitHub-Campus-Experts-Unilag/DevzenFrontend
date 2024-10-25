import React, { useState } from "react";
import Star from "@/assets/icons/star.png";
import DarkStar from "@/assets/icons/dark-star.png";
import { InputStringConverter } from "./InputCronJob";

function CronJobParser() {
  const [inputValue, setInputValue] = useState(""); // State for input value
  const [outputValue, setOutputValue] = useState(""); // State for output value

  return (
    <div className="pl-5 pt-5">
      <h1 className="text-2xl font-semibold">Cron Job Parser</h1>
      <p className="mt-3 text-[#BDBDBD]">
        Enter a cron expression to parse and view the schedule details
      </p>
      <div className="flex items-center justify-center gap-28 mt-10">
        <div className="flex flex-col items-center justify-center">
          <img src={Star} alt="star icon" className="h-10" />
          <p className="text-[#D7D7D7] text-xs font-medium">minute</p>
          <p className="text-[#D7D7D7] text-xs font-medium">(0 - 59)</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={Star} alt="star icon" className="h-10" />
          <p className="text-[#D7D7D7] text-xs font-medium">hour</p>
          <p className="text-[#D7D7D7] text-xs font-medium">(0 - 23)</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={Star} alt="star icon" className="h-10" />
          <p className="text-[#D7D7D7] text-xs font-medium">day of month</p>
          <p className="text-[#D7D7D7] text-xs font-medium">(1 - 31)</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="border-2 h-10 w-10 flex items-center justify-center rounded-full">
            <img src={DarkStar} alt="star icon" className="h-10" />
          </div>
          <p className="text-[#D7D7D7] text-xs font-medium">month</p>
          <p className="text-[#D7D7D7] text-xs font-medium">(1 - 12)</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="border-2 h-10 w-10 flex items-center justify-center rounded-full">
            <img src={DarkStar} alt="star icon" className="h-10" />
          </div>
          <p className="text-[#D7D7D7] text-xs font-medium">day of week</p>
          <p className="text-[#D7D7D7] text-xs font-medium">(1 - 7)</p>
        </div>
      </div>
      <InputStringConverter
        inputValue={inputValue}
        outputValue={outputValue}
        setInputValue={setInputValue}
        setOutputValue={setOutputValue}
      />
    </div>
  );
}

export default CronJobParser;
