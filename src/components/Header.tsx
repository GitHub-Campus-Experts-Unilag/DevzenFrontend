import { useState } from "react";

import { Link } from "react-router-dom";

import { AlignJustify, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import HamburgerMenu from "./HamburgerMenu";

import logo from "../assets/images/logo.svg";

const Header = () => {

    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

    const openHamburgerMenu = () => {
        setIsHamburgerMenuOpen(true);
    }

    const closeHamburgerMenu = () => {
        setIsHamburgerMenuOpen(false);
    }

    return (
        <header className="fixed top-0 w-full z-20 bg-black-90 flex items-center justify-between gap-7 py-4 px-6">
            <a
                href="#"
                className="shrink-0"
            >
                <img
                    src={logo}
                    alt="Devzen logo"
                />
                <span className="sr-only">Home</span>
            </a>

            <nav className="w-full max-w-[515px] hidden md:block">
                <ul className="flex justify-between gap-4">
                    <li>
                        <a
                            href="#features"
                            className="text-[1.0625rem] text-black-20 hover:text-black-10 transition-all duration-300"
                        >Features</a>
                    </li>
                    <li>
                        <a
                            href="#testimonials"
                            className="text-[1.0625rem] text-black-20 hover:text-black-10 transition-all duration-300"
                        >Testimonials</a>
                    </li>
                    <li>
                        <a
                            href="#faqs"
                            className="text-[1.0625rem] text-black-20 hover:text-black-10 transition-all duration-300"
                        >
                            <abbr title="Frequently Asked Questions">FAQs</abbr>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-[1.0625rem] text-black-20 hover:text-black-10 transition-all duration-300"
                        >Contact us</a>
                    </li>
                </ul>
            </nav>

            <Link
                to="login"
                className="whitespace-nowrap border border-green-60 bg-gradient-primary text-gray-10 font-semibold py-2 px-6 rounded-md transition-all duration-300 hover:brightness-[0.85] hidden md:block"
            >Sign in</Link>

            <Button
                onClick={() => isHamburgerMenuOpen ? closeHamburgerMenu() : openHamburgerMenu()}
                className="md:hidden"
            >
                {
                    isHamburgerMenuOpen ?
                        <X className="text-black-40" /> :
                        <AlignJustify className="text-black-40" />
                }
            </Button>

            <HamburgerMenu isHamburgerMenuOpen={isHamburgerMenuOpen} closeHamburgerMenu={closeHamburgerMenu} />
        </header>
    )
}

export default Header;