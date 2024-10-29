import { Cancel } from "../assets/svg"

const Feedback = () => {
  return (
    <section className="flex items-center justify-center h-scren bg-[#161616] py-[152px] tracking-tight px-4">
    <div className="modal text-[#D7D7D7] font-semibold text-xl w-[920px] h-[720px] rounded-[24px] bg-[#1C1C1C]  border border-[#393939]">
      <div className="header h-[132px] border-b border-[#393939] p-3 sm:p-6 pt-9">
        <div className="flex justify-between items-center leading-6">
            <h2 className="text-xl h-10">Feedback form</h2>
            <img src={Cancel} alt="Cancel Icon" />
        </div>
            <p className="text-[#BDBDBD] text-xs h-4">Need any feature improved on or included? Send us an email</p>
      </div> {/* HEADER */}

      <form className="p-3 sm:p-6">
        <div className="mb-[120px]">
          <input type="text" placeholder="Enter email" className="mb-4 pl-4 w-full rounded-lg h-12 border focus:outline-none border-[#303030] bg-[#1D1D1D] placeholder:text-base placeholder:font-medium placeholder:text-[#5A5A5A]"/>
          <textarea placeholder="Your message" name="" id="" className="resize-none h-[277px] p-4 w-full rounded-lg border focus:outline-none border-[#303030] bg-[#1D1D1D] placeholder:text-base placeholder:font-medium placeholder:text-[#5A5A5A]"/>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="w-full sm:w-[451px] h-[40px] bg-gradient-to-r from-[#032C32] to-[#086F7E] rounded text-base">Send</button>
        </div>
      </form>{/* FORM FIELDS */}
    </div> {/* MODAL */}
    </section>
  )
}

export default Feedback;

