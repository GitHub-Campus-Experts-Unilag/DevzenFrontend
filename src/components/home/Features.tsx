import { useState } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/feature-accordion";

import formattersIcon from "../../assets/icons/formatters.svg";
import convertersIcon from "../../assets/icons/converters.svg";
import generatorsIcon from "../../assets/icons/generators.svg";
import collaborationIcon from "../../assets/icons/collaboration.svg";
import zenboardIcon from "../../assets/icons/zenboard.svg";

import formattersGif from "../../assets/gifs/formatters.gif";
import convertersGif from "../../assets/gifs/converters.gif";
import generatorsGif from "../../assets/gifs/generators.gif";
import collaborationGif from "../../assets/gifs/collaboration.gif";
import zenboardGif from "../../assets/gifs/zenboard.gif";

const nameToImgSrc: Record<string, string> = {
    "formatters": formattersGif,
    "converters": convertersGif,
    "generators": generatorsGif,
    "collaboration": collaborationGif,
    "zenboard": zenboardGif,
};

const Features = () => {

    const [category, setCategory] = useState("formatters");

    return (
        <section
            id="features"
            className="my-40"
        >
            <header className="text-center">
                <h2 className="text-gray-10 font-bold text-[3.5rem] mb-2">Completely Free & Open Source</h2>
                <p className="text-gray-30 text-[1.375rem] mb-24 max-w-[849px] mx-auto">Unlock unlimited access to powerful tools, fully customizable and community-driven, at no cost to you.</p>
            </header>

            <div className="flex flex-col gap-y-8 gap-x-5 lg:flex-row">
                <Accordion
                    type="single"
                    defaultValue={category}
                    className="space-y-6 w-full lg:max-w-[424px]"
                >
                    <AccordionItem
                        value="formatters"
                        className={`
                            border-2 border-black-70 rounded-lg px-2 
                            ${category === "formatters" ? "bg-[radial-gradient(ellipse_at_top_left,#098597_0%,#032C32_50%,#1d1d1d_100%)]" : "bg-black-80"}`
                        }
                        >
                        <AccordionTrigger
                            onClick={() => setCategory("formatters")}
                            className="hover:no-underline"
                        >
                            <figure className="flex items-center">
                                <img
                                    src={formattersIcon}
                                    alt="Formatters icon"
                                    className="w-11 h-11"
                                />
                                <figcaption className="text-gray-10 font-semibold text-[1.75rem]">Formatters</figcaption>
                            </figure>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-30 font-medium pl-11 text-base">
                            Instantly clean and structure your code for better readability and best practices.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="converters"
                        className={`
                            border-2 border-black-70 rounded-lg px-2 
                            ${category === "converters" ? "bg-[radial-gradient(ellipse_at_top_left,#098597_0%,#032C32_50%,#1d1d1d_100%)]" : "bg-black-80"}`
                        }
                        >
                        <AccordionTrigger
                            onClick={() => setCategory("converters")}
                            className="hover:no-underline"
                        >
                            <figure className="flex items-center">
                                <img
                                    src={convertersIcon}
                                    alt="Converters icon"
                                    className="w-11 h-11"
                                    />
                                <figcaption className="text-gray-10 font-semibold text-[1.75rem]">Converters</figcaption>
                            </figure>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-30 font-medium pl-11 text-base">
                            Quickly convert files, code, or data formats with a wide range of tools in one place.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="generators"
                        className={`
                            border-2 border-black-70 rounded-lg px-2 
                            ${category === "generators" ? "bg-[radial-gradient(ellipse_at_top_left,#098597_0%,#032C32_50%,#1d1d1d_100%)]" : "bg-black-80"}`
                        }
                        >
                        <AccordionTrigger
                            onClick={() => setCategory("generators")}
                            className="hover:no-underline"
                        >
                            <figure className="flex items-center">
                                <img
                                    src={generatorsIcon}
                                    alt="Generators icon"
                                    className="w-11 h-11"
                                />
                                <figcaption className="text-gray-10 font-semibold text-[1.75rem]">Generators</figcaption>
                            </figure>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-30 font-medium pl-11 text-base">
                            Easily create, test, and preview essential components to streamline your development tasks.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="collaboration"
                        className={`
                            border-2 border-black-70 rounded-lg px-2 
                            ${category === "collaboration" ? "bg-[radial-gradient(ellipse_at_top_left,#098597_0%,#032C32_50%,#1d1d1d_100%)]" : "bg-black-80"}`
                        }
                        >
                        <AccordionTrigger
                            onClick={() => setCategory("collaboration")}
                            className="hover:no-underline"
                        >
                            <figure className="flex items-center">
                                <img
                                    src={collaborationIcon}
                                    alt="Collaboration icon"
                                    className="w-11 h-11"
                                />
                                <figcaption className="text-gray-10 font-semibold text-[1.75rem]">Collaboration</figcaption>
                            </figure>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-30 font-medium pl-11 text-base">
                            Work seamlessly with your team through live sharing and co-creation tools.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="zenboard"
                        className={`
                            border-2 border-black-70 rounded-lg px-2 
                            ${category === "zenboard" ? "bg-[radial-gradient(ellipse_at_top_left,#098597_0%,#032C32_50%,#1d1d1d_100%)]" : "bg-black-80"}`
                        }
                    >
                        <AccordionTrigger
                            onClick={() => setCategory("zenboard")}
                            className="hover:no-underline"
                        >
                            <figure className="flex items-center">
                                <img
                                    src={zenboardIcon}
                                    alt="Zenboard icon"
                                    className="w-11 h-11"
                                />
                                <figcaption className="text-gray-10 font-semibold text-[1.75rem]">Zenboard</figcaption>
                            </figure>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-30 font-medium pl-11 text-base">
                            Collaborate in real-time with an interactive whiteboard for brainstorming and planning.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="bg-black-80 p-4 rounded-lg lg:max-w-[872px]">
                    <img
                        src={nameToImgSrc[category]}
                        alt=""
                        className="max-w-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default Features;