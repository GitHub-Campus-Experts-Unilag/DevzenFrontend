import { Compress } from "@/assets/svg"
import { InputMarkdown } from "./InputMarkdown"
import { OutputMarkdown } from "./OutputMarkdown"

import * as React from 'react'

const MarkdownLayout = () => {
  return (
    <section className="max-w-[1280px] mx-auto">
      <div className="bg-[#131313] px-6 tracking-tight overflow-hidden w-full">
        <header className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <p className="font-bold text-[28px] text-[#E2E2E2]">Markdown Formatter</p>
            <img src={Compress} alt="Compress Icon" />

          </div>
          <p className="font-medium text-[#BDBDBD]">Enter your unformatted Markdown text for clean and consistent formatting.</p>
        </header>
        <main className="sm:flex gap-x-12 h-screen sm:h-fit overflow-auto">
          <InputMarkdown/>
          <OutputMarkdown />
        </main>
      </div>
    </section>
  )
}
export default MarkdownLayout