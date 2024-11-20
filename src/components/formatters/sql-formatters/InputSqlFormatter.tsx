import { ClearInput,GeneralSql } from "@/assets/svg";
const InputSqlFormatter = () => {
  return (
    <div className="sm:w-[50%] mb-4 sm:mb-0">
      <div className="flex items-center gap-4 mb-6 h-[28px]">
        <p className="text-[#BDBDBD] font-semibold">Input:</p>
        <img src={GeneralSql} alt="GeneralSql" />
        <img src={ClearInput} alt="ClearInput" />
      </div>
      <textarea
        name=""
        id=""
        className="sm:h-screen h-[50vh] w-full bg-[#1D1D1D] text-[#D7D7D7] p-4 focus:outline-none"
      />
    </div>
  );
};

export default InputSqlFormatter;