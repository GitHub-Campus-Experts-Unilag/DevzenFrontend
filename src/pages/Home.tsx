import githubIcon from "../assets/icons/github.svg";
import googleIcon from "../assets/icons/google.svg";

import topBlur from "../assets/images/top-blur.png";
import bottomBlur from "../assets/images/bottom-blur.png";

import icon1 from "../assets/icons/icon-1.svg";
import icon2 from "../assets/icons/icon-2.svg";
import icon3 from "../assets/icons/icon-3.svg";
import icon4 from "../assets/icons/icon-4.svg";
import icon5 from "../assets/icons/icon-5.svg";

const Home = () => {
    return (
        <div className="font-primary min-h-screen text-[hsl(0,0%,97%)] bg-black-90 flex justify-center items-center">

            <div className="">
                <a
                    href="/"
                    className="p-2 absolute z-10 top-10 left-1/4 rounded-2xl shadow-[0_0_4px_8px_hsla(190,89%,45%,0.4)]"
                >
                    <img
                        src={icon1}
                        alt=""
                        className="w-[38.5px]"
                    />
                </a>
                <a
                    href="/"
                    className="p-2 absolute z-10 bottom-10 left-1/2 -translate-x-1/2 rounded-2xl shadow-[0_0_4px_8px_hsla(190,89%,45%,0.4)]"
                >
                    <img
                        src={icon2}
                        alt=""
                        className="w-[38.5px]"
                    />
                </a>
                <a
                    href="/"
                    className="p-2 absolute z-10 top-1/2 -translate-y-1/2 right-[10%] rounded-2xl shadow-[0_0_4px_8px_hsla(190,89%,45%,0.4)]"
                >
                    <img
                        src={icon3}
                        alt=""
                        className="w-[38.5px]"
                    />
                </a>
                <a
                    href="/"
                    className="p-2 absolute z-10 top-1/2 -translate-y-1/2 left-[10%] rounded-2xl shadow-[0_0_4px_8px_hsla(190,89%,45%,0.4)]"
                >
                    <img
                        src={icon4}
                        alt=""
                        className="w-[38.5px]"
                    />
                </a>
                <a
                    href="/"
                    className="p-2 absolute z-10 top-10 right-1/4 rounded-2xl shadow-[0_0_4px_8px_hsla(190,89%,45%,0.4)]"
                >
                    <img
                        src={icon5}
                        alt=""
                        className="w-[38.5px]"
                    />
                </a>
            </div>

            <main className="flex flex-col items-center text-center max-w-[885px] p-4">
                <h1 className="font-bold text-[clamp(1.5rem,calc(1.5rem+2vw),4.5rem)] mb-4">Your One-Stop Platform for All Developer Tools</h1>
                <p className="font-medium text-xl mb-12 text-[hsl(0,0%,97%)]/[0.83] leading-7 md:text-[1.375rem]">
                    Tired of jumping from tab to tab for every little task? Simplify your workflow with DevZen,
                    where all your favorite tools are just a click away.
                </p>

                <div className="flex flex-col gap-4 w-full max-w-[324px]">
                    <button
                        className="flex justify-center py-2 px-6 font-semibold rounded-lg bg-gradient-primary border border-[hsl(188,89%,26%)] shadow-[0_2px_4px_0_hsla(187,90%,15%,0.25)]"
                    >
                        <figure className="flex-1 flex justify-center gap-2">
                            <img
                                src={githubIcon}
                                alt="Github icon"
                            />
                            <figcaption>Continue with Github</figcaption>
                        </figure>
                    </button>
                    <button
                        className="flex justify-center py-2 px-6 font-semibold rounded-lg border-2 border-[hsl(188,89%,21%)] shadow-[0_0_0_2px_hsla(188,89%,21%,0.25)]"
                    >
                        <figure className="flex-1 flex justify-center gap-2">
                            <img
                                src={googleIcon}
                                alt="Google icon"
                            />
                            <figcaption>Continue with Google</figcaption>
                        </figure>
                    </button>
                </div>
            </main>

            <img
                src={topBlur}
                alt=""
                className="fixed -top-20 -left-20"
                />
            <img
                src={bottomBlur}
                alt=""
                className="fixed -bottom-24 -right-24"
            />
        </div>
    )
}

export default Home