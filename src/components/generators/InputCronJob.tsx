type InputProps = {
  inputValue: string;
  outputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setOutputValue: React.Dispatch<React.SetStateAction<string>>;
};

import { ClearInput } from "@/assets/svg";
import { Input } from "../ui/input";

export const InputStringConverter = ({
  inputValue,
  setInputValue,
  setOutputValue,
}: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setOutputValue(e.target.value);
  };
  const clearInput = () => {
    setInputValue("");
    setOutputValue("");
  };
  return (
    <section className="w-[50%]">
      <div className="flex items-center gap-4 mb-6 h-[28px]">
        <p className="text-[#BDBDBD] font-semibold">Input:</p>
        <img
          src={ClearInput}
          alt="ClearInput"
          onClick={clearInput}
          className={inputValue == "" ? "hidden" : ""}
        />
      </div>
      <Input
        value={inputValue}
        onChange={handleChange}
        type="text"
        name=""
        id=""
        className="h-[44px] w-full bg-[#1D1D1D] text-[#D7D7D7] p-4 focus:outline-none"
      />
    </section>
  );
};
