import React, { useState } from "react";
import cronParser from "cron-parser";
import { copyToClipboard } from "@/lib/utils";
import { Copy } from "@/assets/svg";

type UpcomingCronJobsProps = {
  cronExpression: string;
};

const UpcomingCronJobs: React.FC<UpcomingCronJobsProps> = ({
  cronExpression,
}) => {
  const [count, setCount] = useState(5); // Default number of upcoming expressions
  const [upcomingJobs, setUpcomingJobs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const calculateUpcomingJobs = () => {
    if (!cronExpression) {
      setUpcomingJobs([]); // Clear jobs if the expression is empty
      return;
    }

    try {
      const interval = cronParser.parseExpression(cronExpression);
      const jobs: string[] = [];
      for (let i = 0; i < count; i++) {
        jobs.push(interval.next().toString());
      }
      setUpcomingJobs(jobs);
    } catch {
      setUpcomingJobs([]); // Clear jobs on error
    }
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    calculateUpcomingJobs();
  };

  const decrementCount = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
    calculateUpcomingJobs();
  };

  const copyAllToClipboard = (e: React.MouseEvent<HTMLImageElement>) => {
    const allJobs = upcomingJobs.join("\n"); // Join all upcoming jobs with a newline
    copyToClipboard(allJobs, setCopied, e); // Pass the event to the copyToClipboard function
  };

  React.useEffect(() => {
    calculateUpcomingJobs();
  }, [cronExpression, count]);

  return (
    <div className="mt-7 border-t px-5 pt-5 mb-10">
      <div className="flex items-end gap-5 font-medium">
        <p>Next scheduled date:</p>
        <div className="flex items-end gap-4 mt-2">
          <button
            onClick={decrementCount}
            className="px-2 bg-[#3D3D3D] text-[#D7D7D7] rounded"
          >
            -
          </button>
          <span className="text-[#D7D7D7]">{count}</span>
          <button
            onClick={incrementCount}
            className="px-2 bg-[#3D3D3D] text-[#D7D7D7] rounded"
          >
            +
          </button>
        </div>
        <img
          src={Copy} // Update with the path to your copy icon
          alt="Copy all upcoming cron jobs"
          onClick={copyAllToClipboard}
          className="cursor-pointer"
        />
        {copied && (
          <p className="text-green-500 text-sm">Copied to clipboard!</p>
        )}
      </div>
      <div className="flex flex-col gap-5 mt-5 bg-[#1D1D1D] p-4 h-56 overflow-hidden overflow-y-auto">
        {upcomingJobs.length > 0 ? ( // Only display jobs if there are any
          upcomingJobs.map((job, index) => (
            <div key={index} className="flex items-center text-sm font-medium">
              <p>{job}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No upcoming jobs to display.</p> // Message when no jobs are available
        )}
      </div>
    </div>
  );
};

export default UpcomingCronJobs;
