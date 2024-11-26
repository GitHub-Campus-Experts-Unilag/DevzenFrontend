import * as React from  'react'
import { Compress } from "@/assets/svg";
import InputSqlFormatter from "./InputSqlFormatter";
import OutputSqlFormatter from "./OutputSqlFormatter";
import {AppContext} from '../../../Context'


const SqlFormatter = () => {
  const context = React.useContext(AppContext);
  if(!context){
    throw new Error("Component must be used within an AppProvider")
  }
  const {dropDown,setDropdown,dropDownSpace,setDropdownSpace}= context
  const handleDropdown=()=>{
    setDropdown(false)
    setDropdownSpace(false)
  }
  return (
    <>
      <p onClick={handleDropdown} className={dropDown || dropDownSpace ? 'overlay bg-black opacity-0 z-20 fixed h-screen w-full top-0 left-0 right-0': 'hidden'}></p>
      <div className="bg-[#131313] px-6 tracking-tight overflow-hidden">
        <header className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <p className="font-bold text-[28px] text-[#E2E2E2]">
              SQL Formatter
            </p>
            <img src={Compress} alt="Compress Icon" />
          </div>
          <p className="font-medium text-[#BDBDBD]">
            Enter your SQL query here for formatting and optimization.
          </p>
        </header>
        <main className="sm:flex gap-x-12 h-screen sm:h-fit overflow-auto">
          <InputSqlFormatter />
          <OutputSqlFormatter />
        </main>
      </div>
    </>
  );
};

export default SqlFormatter;
