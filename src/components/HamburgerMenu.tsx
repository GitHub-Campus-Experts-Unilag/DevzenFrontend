interface HamburgerMenuProps {
    isHamburgerMenuOpen: boolean,
    closeHamburgerMenu: () => void
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isHamburgerMenuOpen, closeHamburgerMenu }) => {
    return (
        <div className={`
            fixed top-16 left-0 right-0 bottom-0 overflow-y-hidden bg-black-90 z-20 transition-all duration-300 md:hidden
            ${isHamburgerMenuOpen ? "max-h-screen" : "max-h-0"}
            `}>
            <nav className="py-12 px-8">
                <ul className="space-y-4">
                    <li>
                        <a
                            onClick={closeHamburgerMenu}
                            href="#features"
                            className="inline-block w-full text-[1.0625rem] border-b-2 py-3 border-black-70 font-medium text-black-20 hover:text-black-10 transition-all duration-300"
                        >Features</a>
                    </li>
                    <li>
                        <a
                            onClick={closeHamburgerMenu}
                            href="#testimonials"
                            className="inline-block w-full text-[1.0625rem] border-b-2 py-3 border-black-70 font-medium text-black-20 hover:text-black-10 transition-all duration-300"
                        >Testimonials</a>
                    </li>
                    <li>
                        <a
                            onClick={closeHamburgerMenu}
                            href="#faqs"
                            className="inline-block w-full text-[1.0625rem] border-b-2 py-3 border-black-70 font-medium text-black-20 hover:text-black-10 transition-all duration-300"
                        >
                            <abbr title="Frequently Asked Questions">FAQs</abbr>
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={closeHamburgerMenu}
                            href="#contact"
                            className="inline-block w-full text-[1.0625rem] border-b-2 py-3 border-black-70 font-medium text-black-20 hover:text-black-10 transition-all duration-300"
                        >Contact us</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HamburgerMenu