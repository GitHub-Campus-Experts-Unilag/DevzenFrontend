type OutputProps = {
    inputValue: string
    outputValue: string
    dropDown: boolean
    setOutputValue: React.Dispatch<React.SetStateAction<string>>
    setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}
import { useState } from "react"
import {ArrowDown, Copy} from "../../assets/svg"
export const OutputStringConverter = ({inputValue,setDropdown,dropDown,outputValue,setOutputValue}:OutputProps) => {
    const [cases,setCase] = useState('camelCase')
    const handleCase=(e:any)=>{
        if(e.target.id == 'camelcase'){
          setCase('camelCase')
          setOutputValue(inputValue.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase()))
        } 
        if(e.target.id == 'lowercase'){
          setCase('lowercase')
          setOutputValue(inputValue.toLowerCase())
        }
        if(e.target.id == 'pascalcase'){
          setCase('PascalCase')
          setOutputValue(inputValue.toLowerCase().replace(/(?:^|\s|-|_)\w/g, (match) => match.toUpperCase()).replace(/\s|-|_/g, ""))
        } 
        if(e.target.id == 'snakecase'){
          setCase('snake_case')
          setOutputValue(inputValue.toLowerCase().replace(/\s+/g, '_'))
        } 
        if(e.target.id == 'uppercase'){
          setCase('UPPERCASE')
          setOutputValue(inputValue.toUpperCase())
        }
        setDropdown(false)
        
      }
  return (
    <section className="w-[50%]">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-[#BDBDBD] font-semibold">Output:</p>
            <div className="flex items-center gap-x-2">
              <div className="relative">
                <div className="flex items-center gap-x-1.5 bg-[#303030] rounded-md h-[28px] w-[105px] justify-center">
                  <p className="text-[#BDBDBD] text-[13px] font-medium">{cases}</p>
                  <img src={ArrowDown} alt="ArrowDown" onClick={()=>setDropdown(!dropDown)}/>
                </div>
                <div className={dropDown? 'bg-[#131313] z-30 absolute font-medium text-[13px] cursor-pointer text-[#BDBDBD] w-[121px] p-2 rounded': 'hidden'}>
                  <p onClick={handleCase} id="camelcase" className="px-2 py-[5px] rounded-md hover:bg-[#303030]">camelCase</p>
                  <p onClick={handleCase} id="lowercase" className="px-2 py-[5px] rounded-md hover:bg-[#303030]">lowercase</p>
                  <p onClick={handleCase} id="pascalcase" className="px-2 py-[5px] rounded-md hover:bg-[#303030]">PascalCase</p>
                  <p onClick={handleCase} id="snakecase" className="px-2 py-[5px] rounded-md hover:bg-[#303030]">snake_case</p>
                  <p onClick={handleCase} id="uppercase" className="px-2 py-[5px] rounded-md hover:bg-[#303030]">UPPERCASE</p>
                </div>
              </div>
              <img src={Copy} alt="CopyButton" onClick={()=>navigator.clipboard.writeText(outputValue)}/>
            </div>
          </div>
          <p className="h-screen overflow-auto w-full bg-[#1D1D1D] text-[#D7D7D7] p-4 focus:outline-none">{outputValue}</p>
        </section>
  )
}