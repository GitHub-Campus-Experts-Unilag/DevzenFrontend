import { useState } from "react";
import Star from "@/assets/icons/star.png";
import DarkStar from "@/assets/icons/dark-star.png";
import { InputCronJob } from "./InputCronJob";
import { OutputCronJob } from "./OutputCronJob";
import UpcomingCronJobs from "./UpcomingCrons";

function CronJobParser() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [error, setError] = useState("");

  return (
    <div className=" pt-5">
      <h1 className="text-2xl font-semibold ml-5">Cron Job Parser</h1>
      <p className="ml-5 mt-3 text-[#BDBDBD]">
        Enter a cron expression to parse and view the schedule details
      </p>
      <div className="ml-5 flex items-center justify-center gap-28 mt-10">
        {[
          { label: "minute", range: "(0 - 59)" },
          { label: "hour", range: "(0 - 23)" },
          { label: "day of month", range: "(1 - 31)" },
          { label: "month", range: "(1 - 12)", icon: DarkStar },
          { label: "day of week", range: "(1 - 7)", icon: DarkStar },
        ].map(({ label, range, icon }, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`${
                icon ? "border-2 h-10 w-10 rounded-full" : ""
              } flex items-center justify-center`}
            >
              <img src={icon || Star} alt="star icon" className="h-10" />
            </div>
            <p className="text-[#D7D7D7] text-xs font-medium">{label}</p>
            <p className="text-[#D7D7D7] text-xs font-medium">{range}</p>
          </div>
        ))}
      </div>
      <InputCronJob
        inputValue={inputValue}
        outputValue={outputValue}
        error={error}
        setError={setError}
        setInputValue={setInputValue}
        setOutputValue={setOutputValue}
      />
      <OutputCronJob outputValue={outputValue} error={error} />
      <div className="mt-7 border-t px-5 pt-5">
        <div className="flex items-center gap-44 font-medium">
          <p>Symbol</p>
          <p>Meaning</p>
        </div>
        <div className="flex flex-col gap-5  mt-5 bg-[#1D1D1D] p-4">
          <div className="flex items-center gap-52 text-sm font-medium">
            <p>*</p>
            <p>
              Wildcard for "every" (e.g * in the minute field means every
              minute)
            </p>
          </div>
          <div className="flex items-center gap-52 text-sm font-medium">
            <p>,</p>
            <p>
              Value list separator to specify multiple values (e.g 1, 15 in the
              minute field means minute 1 and 15)
            </p>
          </div>
          <div className="flex items-center gap-52 text-sm font-medium">
            <p>-</p>
            <p>Range of values (e.g 1-5 means from 1 to 5)</p>
          </div>
          <div className="flex items-center gap-52 text-sm font-medium">
            <p>/</p>
            <p>
              Specifies increments (e.g */5 in the minute field means every 5
              minutes)
            </p>
          </div>
        </div>
      </div>
      <UpcomingCronJobs cronExpression={inputValue} />
    </div>
  );
}

export default CronJobParser;
