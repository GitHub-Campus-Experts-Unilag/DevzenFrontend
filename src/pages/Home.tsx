import Header from "../components/Header";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Workspace from "../components/home/Workspace";
import Testimonials from "../components/home/Testimonials";
import FAQs from "../components/home/FAQs";
import Contact from "../components/home/Contact";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Features />
                <Workspace />
                <Testimonials />
                <FAQs />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default Home;