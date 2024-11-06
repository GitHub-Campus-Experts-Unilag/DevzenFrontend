import { Button } from "@/components/ui/button";

import logo from "../assets/images/logo.svg";
import githubIcon from "../assets/icons/github.svg";
import googleIcon from "../assets/icons/google.svg";

const Footer = () => {
    return (
        <footer className="text-black-30 w-[90%] mx-auto text-center md:text-left">
            <div className="flex flex-col gap-20 border-b border-black-80 pt-12 px-4 pb-40 lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-12 items-center lg:min-w-[349px] lg:items-start">
                    <a href="#">
                        <img
                            src={logo}
                            alt="Devzen logo"
                        />
                        <span className="sr-only">Home</span>
                    </a>
                    <div className="flex flex-col gap-4 w-full max-w-[349px]">
                        <Button
                            className="text-base w-full flex justify-center p-6 font-semibold rounded-lg bg-gradient-primary border border-[hsl(188,89%,26%)] shadow-[0_2px_4px_0_hsla(187,90%,15%,0.25)] transition-all duration-300 hover:brightness-[0.85]"
                        >
                            <figure className="w-full flex justify-center gap-2">
                                <img
                                    src={githubIcon}
                                    alt="Github icon"
                                />
                                <figcaption>Continue with Github</figcaption>
                            </figure>
                        </Button>
                        <Button
                            className="text-base w-full flex justify-center p-6 font-semibold rounded-lg border-2 border-[hsl(188,89%,21%)] shadow-[0_0_0_2px_hsla(188,89%,21%,0.25)] transition-all duration-300 hover:brightness-[0.85]"
                        >
                            <figure className="w-full flex justify-center gap-2">
                                <img
                                    src={googleIcon}
                                    alt="Google icon"
                                />
                                <figcaption>Continue with Google</figcaption>
                            </figure>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full mx-auto max-w-[684px] md:flex-row md:justify-between">
                    <nav>
                        <h3 className="text-gray-10 font-semibold text-xl mb-4">Quick Links</h3>
                        <ul className="flex flex-col items-center gap-2 md:items-start">
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
                    <nav>
                        <h3 className="text-gray-10 font-semibold text-xl mb-4">Legal</h3>
                        <ul className="flex flex-col items-center gap-2 md:items-start">
                            <li>
                                <a
                                    href="#"
                                    className="text-[1.0625rem] text-black-20 hover:text-black-10 transition-all duration-300"
                                >Privacy Policy</a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[1.0625rem] text-black-20 hover:text-black-10 transition-all duration-300"
                                >Terms of Service</a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[1.0625rem] text-black-20 hover:text-black-10 transition-all duration-300"
                                >Cookie Policy</a>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <h3 className="text-gray-10 font-semibold text-xl mb-4">Connect with us</h3>
                        <ul className="flex flex-col items-center gap-2 md:items-start">
                            <li>
                                <a
                                    href="https://github.com/Github-Campus-Experts-Unilag"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[1.0625rem] text-black-20 hover:text-black-10 transition-all duration-300"
                                >Github</a>
                            </li>
                            <li>
                                <a
                                    href="https://x.com/GCEUnilag"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[1.0625rem] text-black-20 hover:text-black-10 transition-all duration-300"
                                >Twitter</a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/gce-unilag"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[1.0625rem] text-black-20 hover:text-black-10 transition-all duration-300"
                                >LinkedIn</a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/@gceunilag"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[1.0625rem] text-black-20 hover:text-black-10 transition-all duration-300"
                                >Youtube</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <p className="font-semibold text-xl text-center py-12 px-4">© 2024 DevZen. All rights reserved.</p>
        </footer>
    )
}

export default Footer;