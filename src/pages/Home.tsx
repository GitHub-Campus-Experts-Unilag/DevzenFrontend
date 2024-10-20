import Header from "../components/Header";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import AdditionalFeatures from "../components/home/AdditionalFeatures";
import Testimonials from "../components/home/Testimonials";
import FAQs from "../components/home/FAQs";
import Contact from "../components/home/Contact";
import Footer from "../components/Footer";

import blurImg from "../assets/images/blur.png";

const Home = () => {
    return (
        <div className="bg-black-90 font-primary relative overflow-hidden">
            <Header />
            <main className="w-[90%] mt-24 mx-auto">
                <Hero />
                <Features />
                <AdditionalFeatures />
                <Testimonials />
                <FAQs />
                <Contact />
            </main>
            <Footer />

            <img
                src={blurImg}
                alt=""
                className="absolute -top-80 -left-[600px]"
            />
            <img
                src={blurImg}
                alt=""
                className="absolute top-[100px] -right-[450px]"
            />
            <img
                src={blurImg}
                alt=""
                className="absolute bottom-[1800px] -left-[550px]"
            />
            <img
                src={blurImg}
                alt=""
                className="absolute bottom-[800px] -right-[450px]"
            />

        </div>
    )
}

export default Home;