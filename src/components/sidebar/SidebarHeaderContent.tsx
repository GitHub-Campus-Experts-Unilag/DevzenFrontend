import { Search } from "lucide-react"

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";

import { Label } from "@/components/ui/label";

import logo from "@/assets/images/logo.svg";

const SidebarHeaderContent = () => {

  const { open, openMobile, isMobile } = useSidebar();

  return (
    <div className="">
      <div className="flex justify-between items-center gap-4 my-5">

        <img
          src={logo}
          alt="DevZen logo"
          className={`${open ? "block" : "hidden"}`}
        />

        <SidebarTrigger className="bg-black-40/15" />
      </div>
      <form>
        <SidebarGroup className="py-0">
          <SidebarGroupContent className="relative">
            <Label htmlFor="search" className="sr-only">
              Search
            </Label>
            <SidebarInput
              id="search"
              placeholder="Search"
              className={`text-base bg-black-60 text-gray-50 border-none placeholder:text-black-40 ${(open && !isMobile) || openMobile ? "placeholder:opacity-100 pl-8" : "text-transparent placeholder:opacity-0 pl-0"}`}
            />
            <Search className="text-black-40 pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
          </SidebarGroupContent>
        </SidebarGroup>
      </form>
    </div>
  )
}

export default SidebarHeaderContent;