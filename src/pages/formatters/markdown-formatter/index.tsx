import "../../../components/converters/converters.css";
import ClearButton from "../../../components/converters/number-base-converter/ClearButton";
import CopyButton from "../../../components/converters/number-base-converter/CopyButton";
import OpenInBrowserBtn from "../../../components/converters/markdown-formatter/OpenInBrowserBtn";
import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";
import { marked } from "marked";


function MarkdownFormatter() {
  const [markdown, setMarkdown] = useState("");
  const outputRef = useRef<HTMLDivElement>(null);

  const clearMarkdownInput = () => {
    setMarkdown("");
  };

  const formatMarkdown = (text: string) => {
    text = text.replace(/~(.*?)~/g, "<sub>$1</sub>");
    text = text.replace(/\^(.+?)\^/g, "<sup>$1</sup>");
    return text;
  };

  const formattedMarkdown = formatMarkdown(markdown);

  // HTML content for new tab
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Formatted Markdown</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css">
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          .blockquote { background-color: #f9f9f9; border-left: 4px solid #ccc; padding: 10px; font-style: italic; }
        </style>
      </head>
      <body>
        <div id="content">${marked.parse(formattedMarkdown)}</div>
      </body>
    </html>
  `;

  return (
    <div className="flex flex-col m-8 gap-2 bg- text-whitesmoke ml-8 text-gray-50">
      <div className="flex flex-col mx-6 my-9 gap-4 bg-black-90">
        <h1 className="text-[2rem]">Markdown Formatter</h1>
        <p className="text-base leading-5">
          Enter your unformatted Markdown text for clean and consistent formatting.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-full ml-0 sm:ml-auto sm:gap-8 sm:flex-row markdown-converter-page-content">
        <div className="input-section w-full  max-w-full flex flex-col gap-4 p-4 max-h-[500px] break-words sm:w-1/2 sm:bg-transparent sm:gap-[17px] sm:max-w-[500px] sm:gap-[24px]">
          <div className="flex gap-4">
            <p>Input: </p>
            <ClearButton clear={clearMarkdownInput} />
          </div>
          <textarea
            className="p-2.5 h-[450px] bg-[#303030] cursor-pointer text-white"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Enter Markdown text here"
          />
        </div>

        <div className="output-section w-full max-w-full flex flex-col gap-4  p-4 max-h-[500px] break-words sm:w-1/2 sm:bg-transparent sm:gap-[17px] sm:max-w-[500px]">
          <div className="flex gap-4">
            <p>Output: </p>
            <OpenInBrowserBtn htmlContent={htmlContent} />
            <CopyButton value={formattedMarkdown} outputRef={outputRef} />
          </div>
          <div className="markdown-output bg-[#f5f5f5] border-2 border-white text-black overflow-y-auto overflow-x-hidden min-h-[420px] w-full max-w-full box-border break-words p-2" ref={outputRef}>
            <ReactMarkdown className="react-markdown"
              children={formattedMarkdown}
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex, rehypeRaw]}
              components={{
                sub: ({ children }) => <sub>{children}</sub>,
                sup: ({ children }) => <sup>{children}</sup>,
                blockquote: ({ children }) => (
                  <blockquote className="bg-gray-200 p-4 border-l-4 border-gray-500 italic">
                    {children}
                  </blockquote>
                ),
              }}
            
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarkdownFormatter;
