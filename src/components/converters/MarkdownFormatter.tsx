import "./converters.css";
import ClearButton from "./ClearButton";
import CopyButton from "./CopyButton";
import OpenInBrowserBtn from "./OpenInBrowserBtn";
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
        <h1 className="title">Markdown Formatter</h1>
        <p className="text-base leading-5">
          Enter your unformatted Markdown text for clean and consistent formatting.
        </p>
      </div>

      <div className="markdown-converter-page-content ml-2 markdown-converter">
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

        <div className="output-section">
          <div className="output-btns">
            <p>Output: </p>
            <OpenInBrowserBtn htmlContent={htmlContent} />
            <CopyButton value={formattedMarkdown} outputRef={outputRef} />
          </div>
          <div className="markdown-output" ref={outputRef}>
            <ReactMarkdown
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
              className="output-container"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarkdownFormatter;
