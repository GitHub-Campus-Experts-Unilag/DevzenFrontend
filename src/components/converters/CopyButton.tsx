import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";

interface CopyButtonProps {
  outputRef?: React.RefObject<HTMLDivElement>;
  value: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ outputRef, value }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      if (!navigator.clipboard) {
        console.error("Clipboard API not supported");
        return;
      }

      let htmlToCopy = "";

      if (outputRef && outputRef.current) {
        const clonedElement = outputRef.current.cloneNode(true) as HTMLElement;
        applyInlineStyles(clonedElement);
        htmlToCopy = clonedElement.outerHTML;
      } else if (value) {
        htmlToCopy = value;
      }

      if (htmlToCopy) {
        if (typeof ClipboardItem === "function") {
          await navigator.clipboard.write([
            new ClipboardItem({
              "text/html": new Blob([htmlToCopy], { type: "text/html" }),
              "text/plain": new Blob([convertToMarkdown(htmlToCopy)], { type: "text/plain" }),
            })
          ]);
        } else {
          console.error("ClipboardItem is not supported in this environment.");
        }

        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const applyInlineStyles = (element: HTMLElement) => {
    const elements = element.querySelectorAll("*") as NodeListOf<HTMLElement>;
    elements.forEach((el) => {
      const computedStyle = window.getComputedStyle(el);
      for (const key of computedStyle) {
        el.style.setProperty(key, computedStyle.getPropertyValue(key));
      }

      // Updated blockquote styling
      if (el.tagName === "BLOCKQUOTE") {
        el.style.borderLeft = "50px solid #888";
        el.style.padding = "15px 20px";
        el.style.backgroundColor = "#f0f0f0";
        el.style.fontStyle = "italic";
        el.style.margin = "15px 0";
        el.style.color = "#555";
      }
    });
  };

  const convertToMarkdown = (html: string): string => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const blockquote = tempDiv.querySelector("blockquote");

    let markdownText = "";

    if (blockquote) {
      markdownText += `> ${blockquote.innerText}\n\n`;
    }

    const listItems = tempDiv.querySelectorAll("li");
    listItems.forEach((item) => {
      markdownText += `- ${item.innerText}\n`;
    });

    return markdownText || html;
  };

  return (
    <button
      className="bg-[#303030] text-xs py-1 px-2 rounded flex items-center self-center gap-1"
      onClick={copyToClipboard}
    >
      {copied ? "Copied" : "Copy"}
      {!copied && <ContentCopyIcon className="copy-icon" />}
    </button>
  );
};

export default CopyButton;
