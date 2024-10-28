import { Compress } from "../../assets/svg"
import { InputStringConverter } from "./InputStringConverter"
import { OutputStringConverter } from "./OutputStringConverter"
import { useState } from "react"
export const StringConverter = () => {
  const [inputValue,setinputValue] = useState('')
  const [outputValue,setOutputValue] = useState('')
  const [dropDown,setDropdown] = useState(false)
  return (
  <section className="max-w-[1280px] mx-auto">
    <p onClick={()=> setDropdown(false)} className={dropDown?'overlay bg-black opacity-0 z-20 fixed h-screen w-full top-0 left-0 right-0': 'hidden'}></p>
    <div className="bg-[#131313] px-6 tracking-tight overflow-hidden">
      <header className="mb-8">
        <div className="flex justify-between items-center mb-4">
            <p className="font-bold text-[28px] text-[#E2E2E2]">String Case Converter</p>
            <img src={Compress} alt="Compress Icon" />
        </div>
        <p className="font-medium text-[#BDBDBD]">Enter your text to convert it to your desired case format.</p>
      </header> 
      <main className="sm:flex gap-x-12 h-screen sm:h-fit overflow-auto">
        <InputStringConverter outputValue={outputValue} setOutputValue={setOutputValue} inputValue={inputValue} setInputValue={setinputValue}/>
        <OutputStringConverter outputValue={outputValue} inputValue={inputValue} setOutputValue={setOutputValue} dropDown={dropDown} setDropdown={setDropdown}/>
      </main>
    </div>
  </section>
  )
}