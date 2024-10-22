type InputProps ={
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
import { ClearInput } from "@/assets/svg"
export const InputStringConverter = ({inputValue,setInputValue}: InputProps) => {
    const handleChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setInputValue(e.target.value)
    }
    const clearInput=()=>{
        setInputValue('')
    }
  return (
    <section className="w-[50%]">
    <div className="flex items-center gap-4 mb-6 h-[28px]">
      <p className="text-[#BDBDBD] font-semibold">Input:</p>
      <img src={ClearInput} alt="ClearInput" onClick={clearInput} className={inputValue == ''? 'hidden': ''}/>
    </div>
    <textarea value={inputValue} onChange={handleChange}  name="" id="" className="h-screen w-full bg-[#1D1D1D] text-[#D7D7D7] p-4 focus:outline-none"/>
  </section>
  )
}