import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import avatar1 from "../../assets/images/avatar-1.png";
import avatar2 from "../../assets/images/avatar-2.png";
import avatar3 from "../../assets/images/avatar-3.png";

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="flex flex-col items-center mb-96"
        >
            <header className="text-center">
                <h2 className="text-gray-10 font-bold text-[clamp(1.5rem,calc(1.5rem+2vw),3.5rem)] mb-2">What Developers Are Saying</h2>
                <p className="text-gray-30 text-[1.375rem] mb-24 max-w-[849px] mx-auto">See how DevZen is transforming workflows and boosting productivity for developers worldwide.</p>
            </header>

            <Carousel
                opts={{
                    align: "start"
                }}
                className="w-full max-w-[1320px]"
            >
                <CarouselContent className="-ml-1 gap-2.5">
                    <CarouselItem className="pl-1 py-2 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                            <Card className="relative bg-black-80 md:max-w-[484px] h-full rounded-sm border-none before:content-['“'] before:absolute before:-top-9 before:left-6 before:text-black-10/40 before:text-[4rem] before:font-medium">
                                <CardContent className="flex items-center justify-center p-6">
                                    <article className="font-medium text-black-20">
                                        <header className="mb-8">
                                            <figure className="flex items-center gap-2.5 mb-4">
                                                <img
                                                    src={avatar1}
                                                    alt="Dylan Ray's avatar"
                                                />
                                                <figcaption className="">Dylan Ray</figcaption>
                                            </figure>
                                            <span className="bg-black-60 text-blac text-[0.8125rem] py-1.5 px-3 rounded-3xl">Frontend Developer</span>
                                        </header>
                                        <p className="text-[1.375rem]">
                                            DevZen has completely transformed the way I work. Having everything in one place means I can focus more on coding
                                            and less on managing tools.
                                        </p>
                                    </article>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 py-2 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                            <Card className="relative bg-black-80 md:max-w-[484px] h-full rounded-sm border-none before:content-['“'] before:absolute before:-top-9 before:left-6 before:text-black-10/40 before:text-[4rem] before:font-medium">
                                <CardContent className="flex items-center justify-center p-6">
                                    <article className="font-medium text-black-20">
                                        <header className="mb-8">
                                            <figure className="flex items-center gap-2.5 mb-4">
                                                <img
                                                    src={avatar2}
                                                    alt="Mia Tina's avatar"
                                                />
                                                <figcaption className="">Mia Tina</figcaption>
                                            </figure>
                                            <span className="bg-black-60 text-blac text-[0.8125rem] py-1.5 px-3 rounded-3xl">Full Stack Developer</span>
                                        </header>
                                        <p className="text-[1.375rem]">
                                            The collaboration features are a game-changer. My team and I can now brainstorm, review, and code all in real time
                                            without jumping between platforms.
                                        </p>
                                    </article>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 py-2 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                            <Card className="relative bg-black-80 md:max-w-[484px] h-full rounded-sm border-none before:content-['“'] before:absolute before:-top-9 before:left-6 before:text-black-10/40 before:text-[4rem] before:font-medium">
                                <CardContent className="flex items-center justify-center p-6">
                                    <article className="font-medium text-black-20">
                                        <header className="mb-8">
                                            <figure className="flex items-center gap-2.5 mb-4">
                                                <img
                                                    src={avatar3}
                                                    alt="Angela Jay's avatar"
                                                />
                                                <figcaption className="">Angela Jay</figcaption>
                                            </figure>
                                            <span className="bg-black-60 text-blac text-[0.8125rem] py-1.5 px-3 rounded-3xl">Frontend Developer</span>
                                        </header>
                                        <p className="text-[1.375rem]">
                                            DevZen is a must-have for any developer. The simplicity and range of tools have streamlined my projects, and I
                                            love how everything is just one click away.
                                        </p>
                                    </article>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious
                 className="top-auto scale-150 -bottom-24 bg-black-60 text-black-40 border-none left-[30%] md:left-[38%] md:-bottom-48 lg:left-[42%]"
                />
                <CarouselNext
                 className="top-auto scale-150 -bottom-24 bg-black-60 text-black-40 border-none right-[30%] md:right-[38%] md:-bottom-48 lg:right-[42%]"
                />
            </Carousel>
        </section>
    )
}

export default Testimonials;