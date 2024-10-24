import "./converters.css";
import ClearButton from "./ClearButton";
import CopyButton from "./CopyButton";
import OpenInBrowserBtn from "./OpenInBrowserBtn";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

function MarkdownFormatter() {
  const [markdown, setMarkdown] = useState("# Hello");

  const clearMarkdownInput = () => {
    setMarkdown("");
  };

  console.log(markdown)
  return (
    <div className="flex flex-col m-8 gap-2 bg- text-whitesmoke ml-8 text-gray-50">
      <div className="flex flex-col mx-6 my-9 gap-4 bg-black-90">
        <h1 className="text-xl">Markdown Formatter</h1>
        <p className="text-base leading-5">
          Enter your unformatted Markdown text for clean and consistent
          formatting.
        </p>
      </div>

      <div className="markdown-converter-page-content  ml-2">
        {/* Input Section */}
        <div className="input-section">
          <div className="input-btns">
            <p>Input: </p>
            <ClearButton clear={clearMarkdownInput}/>
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
            <CopyButton value={markdown} />
          </div>
          <div className="markdown-output">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarkdownFormatter;
