import numberBaseConverterGif from "../../assets/gifs/number-base-converter.gif";
import csvToJsonGif from "../../assets/gifs/csv-to-json.gif";

const AdditionalFeatures = () => {
    return (
        <section
            id="additional-features"
            className="mb-80"
        >
            <header className="text-center">
                <h2 className="text-gray-10 font-bold text-[clamp(1.5rem,calc(1.5rem+2vw),3.5rem)] mb-2">Personalize Your Workspace</h2>
                <p className="text-gray-30 text-[1.375rem] mb-24 max-w-[849px] mx-auto">Customize your layout and experience flexibility that helps you stay focused and productive.</p>
            </header>

            <img
                src={numberBaseConverterGif}
                alt=""
                className="mb-40"
            />
            <img
                src={csvToJsonGif}
                alt=""
            />
        </section>
    )
}

export default AdditionalFeatures;