import { Compress } from "../../assets/svg"
import { InputStringConverter } from "./InputStringConverter"
import { OutputStringConverter } from "./OutputStringConverter"
import { useState } from "react"
export const StringConverter = () => {
  const [inputValue,setinputValue] = useState('')
  return (
    <div className="bg-[#131313] h-screen px-6 tracking-tight overflow-hidden">
      <header className="mb-8">
        <div className="flex justify-between items-center mb-4">
            <p className="font-bold text-[28px] text-[#E2E2E2]">String Case Converter</p>
            <img src={Compress} alt="Compress Icon" />
        </div>
        <p className="font-medium text-[#BDBDBD]">Enter your text to convert it to your desired case format.</p>
      </header> 
      <main className="flex gap-x-12">
        <InputStringConverter inputValue={inputValue} setInputValue={setinputValue}/>
        <OutputStringConverter inputValue={inputValue}/>
      </main>
    </div>
  )
}