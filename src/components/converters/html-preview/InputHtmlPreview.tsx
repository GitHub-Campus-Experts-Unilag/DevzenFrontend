type InputProps = {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

import { ClearInput } from "@/assets/svg"
export const InputHtmlPreview = ({inputValue,setInputValue}:InputProps) => {
  const handleChange=(e:any)=>{
    setInputValue(e.target.value)
  }
  return (
    <div className="sm:w-[50%] mb-4 sm:mb-0">
        <div className="flex items-center gap-4 mb-6 h-[28px]">
          <p className="text-[#BDBDBD] font-semibold">Input:</p>
          <img src={ClearInput} alt="ClearInput" onClick={()=>setInputValue('')} className={inputValue == ''? 'hidden': ''}/>
        </div>
        <textarea value={inputValue} onChange={handleChange}  name="" id="" className="sm:h-screen h-[50vh] w-full bg-[#1D1D1D] text-[#D7D7D7] p-4 focus:outline-none"/>
    </div>
  )
}
