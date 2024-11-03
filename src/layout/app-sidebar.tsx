import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import SidebarHeaderContent from "@/components/sidebar/SidebarHeaderContent";
import SidebarMainContent from "@/components/sidebar/SidebarMainContent";
import SidebarFooterContent from "@/components/sidebar/SidebarFooterContent";

import editIcon from "../assets/icons/edit.svg";
import formattersIcon from "../assets/icons/formatters.svg";
import convertersIcon from "../assets/icons/converters.svg";
import generatorsIcon from "../assets/icons/generators.svg";

// This is sample data.
const data = [
  {
    title: "Quick Sketch",
    url: "quick-sketch",
    imgSrc: editIcon,
    isActive: true,
    items: [
      {
        title: "Zenboard",
        url: "zenboard",
      }
    ],
  },
  {
    title: "Formatters",
    url: "formatters",
    imgSrc: formattersIcon,
    isActive: true,
    items: [
      {
        title: "JSON Format/ Validate",
        url: "json",
      },
      {
        title: "SQL Formatter",
        url: "sql",
      },
      {
        title: "Markdown Formatter",
        url: "markdown",
      },
    ],
  },
  {
    title: "Converters",
    url: "converters",
    imgSrc: convertersIcon,
    items: [
      {
        title: "URL Parser",
        url: "url-parser",
      },
      {
        title: "Number Base Converter",
        url: "number-base-converter",
      },
      {
        title: "String Case Converter",
        url: "string-case-converter",
      },
      {
        title: "Gostruct to Typescript Interfaces",
        url: "gostruct-to-typescript-interfaces",
      },
      {
        title: "CSV to JSON",
        url: "csv-to-json",
      },
    ],
  },
  {
    title: "Generators",
    url: "generators",
    imgSrc: generatorsIcon,
    items: [
      {
        title: "JWT Debugger",
        url: "jwt-debugger",
      },
      {
        title: "RegExp Tester",
        url: "regexp-tester",
      },
      {
        title: "Cron Job Parser",
        url: "cron-job-parser",
      },
      {
        title: "HTML Preview",
        url: "html-preview",
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarHeaderContent />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMainContent items={data} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarFooterContent />
      </SidebarFooter>
    </Sidebar>
  )
}
