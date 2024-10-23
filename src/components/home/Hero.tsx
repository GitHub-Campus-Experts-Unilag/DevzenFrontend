import formattersIcon from "../../assets/icons/formatters.svg";
import collaborationIcon from "../../assets/icons/collaboration.svg";
import generatorsIcon from "../../assets/icons/generators.svg";
import zenboardIcon from "../../assets/icons/zenboard.svg";
import convertersIcon from "../../assets/icons/converters.svg";

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-[90vh] text-gray-10 flex justify-center items-center relative"
        >
            <div className="flex flex-col items-center text-center max-w-[885px] p-4">
                <h1 className="font-bold text-[clamp(1.5rem,calc(1.75rem+2.5vw),4.5rem)] mb-4">Your One-Stop Platform for All Developer Tools</h1>
                <p className="font-medium text-xl mb-12 text-gray-10/[0.83] leading-7 md:text-[1.375rem]">
                    Tired of jumping from tab to tab for every little task? Simplify your workflow with DevZen,
                    where all your favorite tools are just a click away.
                </p>
            </div>

            <div className="hidden lg:block">
                <figure
                    className="group flex flex-col items-center gap-5 absolute z-10 top-8 left-1/4"
                >
                    <img
                        src={formattersIcon}
                        alt=""
                        className="w-14 p-2 rounded-2xl shadow-[0_0_4px_8px_hsla(190,89%,45%,0.4)]"
                    />
                    <figcaption className="text-2xl font-medium text-black-20 opacity-0 transition-all duration-300 group-hover:opacity-100">Formatters</figcaption>
                </figure>
                <figure
                    className="group flex flex-col items-center gap-5 absolute z-10 top-8 right-1/4"
                >
                    <img
                        src={convertersIcon}
                        alt=""
                        className="w-14 p-2 rounded-2xl shadow-[0_0_4px_8px_hsla(190,89%,45%,0.4)]"
                    />
                    <figcaption className="text-2xl font-medium text-black-20 opacity-0 transition-all duration-300 group-hover:opacity-100">Converters</figcaption>
                </figure>
                <figure
                    className="group flex flex-col items-center gap-5 absolute z-10 top-1/2 -translate-y-1/2 left-[5%]"
                >
                    <img
                        src={zenboardIcon}
                        alt=""
                        className="w-14 p-2 rounded-2xl shadow-[0_0_4px_8px_hsla(190,89%,45%,0.4)]"
                    />
                    <figcaption className="text-2xl font-medium text-black-20 opacity-0 transition-all duration-300 group-hover:opacity-100">Zenboard</figcaption>
                </figure>
                <figure
                    className="group flex flex-col items-center gap-5 absolute z-10 top-1/2 -translate-y-1/2 right-[5%]"
                >
                    <img
                        src={generatorsIcon}
                        alt=""
                        className="w-14 p-2 rounded-2xl shadow-[0_0_4px_8px_hsla(190,89%,45%,0.4)]"
                    />
                    <figcaption className="text-2xl font-medium text-black-20 opacity-0 transition-all duration-300 group-hover:opacity-100">Generators</figcaption>
                </figure>
                <figure
                    className="group flex flex-col items-center gap-5 absolute z-10 bottom-10 left-1/2 -translate-x-1/2"
                >
                    <img
                        src={collaborationIcon}
                        alt=""
                        className="w-14 p-2 rounded-2xl shadow-[0_0_4px_8px_hsla(190,89%,45%,0.4)]"
                    />
                    <figcaption className="text-2xl font-medium text-black-20 opacity-0 transition-all duration-300 group-hover:opacity-100">Collaboration</figcaption>
                </figure>
            </div>
        </section>
    )
}

export default Hero;