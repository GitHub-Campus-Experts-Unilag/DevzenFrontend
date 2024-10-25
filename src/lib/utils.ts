import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import React from "react";

export const copyToClipboard = (
  outputValue: string,
  setCopied: React.Dispatch<React.SetStateAction<boolean>>,
  e: React.MouseEvent<HTMLImageElement>
) => {
  e.preventDefault(); // Optional: Prevent default action if needed
  navigator.clipboard
    .writeText(outputValue)
    .then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide message after 2 seconds
    })
    .catch((error) => {
      console.error("Failed to copy text:", error);
    });
};
