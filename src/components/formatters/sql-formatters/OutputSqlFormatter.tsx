import * as React from "react";
import { AppContext } from "../../../Context";
import { ArrowDown, Copy } from "@/assets/svg";
import { actions } from "./constants";
import { format } from "sql-formatter";

const OutputSqlFormatter = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("Component must be used within an AppProvider");
  }
  const {
    dropDown,
    setDropdown,
    dropDownSpace,
    setDropdownSpace,
    outputSql,
    setOutputSql,
  } = context;

  const [currentCase, setCase] = React.useState(actions[0].cases[0].level);
  const [space, setSpace] = React.useState(actions[0].spaces[0].space);

  const handleCase = (index: number) => {
    setCase(actions[0].cases[index].level);
    setDropdown(false);
  };

  const handleSpace = (index: number) => {
    setSpace(actions[0].spaces[index].space);
    setDropdownSpace(false);
  };
  React.useEffect(() => {
    try{
      const formatted = format(outputSql,{
        language: 'sql',
        tabWidth: 4,
        keywordCase: 'upper'
      });
      setOutputSql(formatted)
      console.log(outputSql)
    }catch(error){
      console.error('Error formating query', error)
    }
  },[outputSql,setOutputSql]);
  return (
    <div className="sm:w-[50%]">
      <div className="flex items-center gap-4 mb-6">
        <p className="text-[#BDBDBD] font-semibold">Output:</p>
        <div className="flex items-center gap-x-2">
          {/* cases */}
          <div className="relative z-30">
            <div
              className="flex items-center gap-x-1.5 bg-[#303030] rounded-md h-[28px] w-[105px] justify-center"
              onClick={() => setDropdown(!dropDown)}
            >
              <p className="text-[#BDBDBD] text-[13px] font-medium">
                {currentCase}
              </p>
              <img src={ArrowDown} alt="ArrowDown" />
            </div>
            <div
              className={
                dropDown
                  ? "bg-[#131313] z-30 absolute font-medium text-[13px] cursor-pointer text-[#BDBDBD] w-[121px] p-2 rounded"
                  : "hidden"
              }
            >
              {actions.map((action) =>
                action.cases.map((singleCase, index) => (
                  <p
                    key={index}
                    className="px-2 py-[5px] rounded-md hover:bg-[#303030]"
                    onClick={() => handleCase(index)}
                  >
                    {singleCase.level}
                  </p>
                ))
              )}
            </div>
          </div>

          {/* spaces below */}
          <div className="relative z-30">
            <div
              className="flex items-center gap-x-1.5 bg-[#303030] rounded-md h-[28px] w-[105px] justify-center"
              onClick={() => setDropdownSpace(!dropDownSpace)}
            >
              <p className="text-[#BDBDBD] text-[13px] font-medium">{space}</p>
              <img src={ArrowDown} alt="ArrowDown" />
            </div>
            <div
              className={
                dropDownSpace
                  ? "bg-[#131313] z-30 absolute font-medium text-[13px] cursor-pointer text-[#BDBDBD] w-[121px] p-2 rounded"
                  : "hidden"
              }
            >
              {actions.map((action) =>
                action.spaces.map((singleSpace, index) => (
                  <p
                    key={index}
                    className="px-2 py-[5px] rounded-md hover:bg-[#303030]"
                    onClick={() => handleSpace(index)}
                  >
                    {singleSpace.space}
                  </p>
                ))
              )}
            </div>
          </div>
          <img src={Copy} alt="CopyButton" />
        </div>
      </div>
      <pre className="sm:h-screen h-[50vh]  overflow-auto w-full bg-[#1D1D1D] text-[#D7D7D7] p-4 focus:outline-none">
        {outputSql}
      </pre>
    </div>
  );
};

export default OutputSqlFormatter;
