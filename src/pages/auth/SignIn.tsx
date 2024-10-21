import { Button } from "@/components/ui/button";

import githubIcon from "../../assets/icons/github.svg";
import googleIcon from "../../assets/icons/google.svg";

import formattersIcon from "../../assets/icons/formatters.svg";
import collaborationIcon from "../../assets/icons/collaboration.svg";
import generatorsIcon from "../../assets/icons/generators.svg";
import zenboardIcon from "../../assets/icons/zenboard.svg";
import convertersIcon from "../../assets/icons/converters.svg";

import blurImg from "../../assets/images/blur.png";

const AuthPage = () => {
  return (
    <main className="relative bg-black-90 py-12 min-h-screen overflow-x-hidden flex">
      <section
        className="w-[90%] mx-auto text-gray-10 flex flex-col justify-center items-center relative"
      >
        <div className="flex flex-col items-center text-center max-w-[885px] p-4">
          <h1 className="font-bold text-[clamp(1.5rem,calc(1.75rem+2.5vw),4.5rem)] mb-4">Your One-Stop Platform for All Developer Tools</h1>
          <p className="font-medium text-xl mb-12 text-gray-10/[0.83] leading-7 md:text-[1.375rem]">
            Tired of jumping from tab to tab for every little task? Simplify your workflow with DevZen,
            where all your favorite tools are just a click away.
          </p>
        </div>

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

        <div className="hidden lg:block">
          <figure
            className="group flex flex-col items-center gap-5 absolute z-10 top-8 left-[20%]"
          >
            <img
              src={formattersIcon}
              alt=""
              className="w-14 p-2 rounded-2xl shadow-[0_0_4px_8px_hsla(190,89%,45%,0.4)]"
            />
            <figcaption className="text-2xl font-medium text-black-20 opacity-0 transition-all duration-300 group-hover:opacity-100">Formatters</figcaption>
          </figure>
          <figure
            className="group flex flex-col items-center gap-5 absolute z-10 top-8 right-[20%]"
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
            className="group flex flex-col items-center gap-5 absolute z-10 -bottom-16 left-1/2 -translate-x-1/2"
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

      <img
        src={blurImg}
        alt=""
        className="hidden lg:absolute lg:-top-[500px] lg:-left-[500px] lg:inline-block"
      />
      <img
        src={blurImg}
        alt=""
        className="hidden lg:absolute lg:-bottom-[75px] lg:-right-[500px] lg:inline-block"
      />
    </main>
  )
}

export default AuthPage;