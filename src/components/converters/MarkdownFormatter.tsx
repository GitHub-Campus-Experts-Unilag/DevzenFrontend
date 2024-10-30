import "./converters.css";
import ClearButton from "./ClearButton";
import CopyButton from "./CopyButton";
import OpenInBrowserBtn from "./OpenInBrowserBtn";
import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // Import rehype-raw
import "katex/dist/katex.min.css";

function MarkdownFormatter() {
  const [markdown, setMarkdown] = useState("");
  const outputRef = useRef<HTMLDivElement>(null)

  const clearMarkdownInput = () => {
    setMarkdown("");
  };

  const formatMarkdown = (text: string) => {
    text = text.replace(/~(.*?)~/g, '<sub>$1</sub>');
    text = text.replace(/\^(.+?)\^/g, '<sup>$1</sup>'); 
    return text;
  };

  // Store the formatted markdown for easier access
  const formattedMarkdown = formatMarkdown(markdown);

  return (
    <div className="flex flex-col m-8 gap-2 bg- text-whitesmoke ml-8 text-gray-50">
      <div className="flex flex-col mx-6 my-9 gap-4 bg-black-90">
        <h1 className="title">Markdown Formatter</h1>
        <p className="text-base leading-5">
          Enter your unformatted Markdown text for clean and consistent
          formatting.
        </p>
      </div>

      <div className="markdown-converter-page-content ml-2 markdown-converter">
        {/* Input Section */}
        <div className="input-section">
          <div className="input-btns">
            <p>Input: </p>
            <ClearButton clear={clearMarkdownInput} />
          </div>
          <textarea
            className="textarea"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Enter Markdown text here"
          />
        </div>
        

        {/* Output Section */}
        <div className="output-section">
          <div className="output-btns">
            <p>Output: </p>
            <OpenInBrowserBtn />
            {/* Pass the formatted markdown to the CopyButton */}
            <CopyButton value={formattedMarkdown} outputRef={outputRef} />
          </div>
          <div className="markdown-output" ref={outputRef}>
            <ReactMarkdown
              children={formattedMarkdown} // Use formatted markdown
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex, rehypeRaw]} // Add rehype-raw here
              components={{
                sub: ({ children }) => <sub>{children}</sub>,
                sup: ({ children }) => <sup>{children}</sup>,
                blockquote: ({ children }) => (
                  <blockquote className="bg-gray-200 p-4 border-l-4 border-gray-500 italic">
                    {children}
                  </blockquote>
                ),
              }} className="output-container"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarkdownFormatter;
