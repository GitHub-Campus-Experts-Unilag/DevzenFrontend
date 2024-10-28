import {Avatar, ShareButton,Compress,Menu} from "../../assets/svg"
import { InputHtmlPreview } from "./InputHtmlPreview"
import { OutputHtmlPreview } from "./OutputHtmlPreview"

import * as React from 'react'

export const HtmlPreview = () => {
  const [inputValue,setInputValue] = React.useState('')
  const [outputValue,setOutputValue] = React.useState('')
  return (
    <section className="max-w-[1280px] mx-auto">
    <div className="bg-[#131313] pt-8 px-6 tracking-tight overflow-hidden w-full">
      <header className="mb-8">
        <div className="flex justify-between items-center mb-4">
            <p className="font-bold text-[28px] text-[#E2E2E2]">HTML Preview</p>
            <div>
                <div className="sm:flex gap-x-6 items-center hidden">
                  <img src={Avatar} alt="Avatar Icon" />
                  <img src={ShareButton} alt="ShareButton Icon" />
                  <img src={Compress} alt="Compress Icon" />
                </div>
                <img className="sm:hidden" src={Menu} alt="Menu Icon" />
            </div>
        </div>
        <p className="font-medium text-[#BDBDBD]">Enter your HTML code to preview it live.</p>
      </header> 
      <main className="sm:flex gap-x-12 h-screen sm:h-fit overflow-auto">
        <InputHtmlPreview inputValue={inputValue} setInputValue={setInputValue}/>
        <OutputHtmlPreview inputValue={inputValue} outputValue={outputValue} setOutputValue={setOutputValue}/>
      </main>
    </div>
    </section>
  )
}
