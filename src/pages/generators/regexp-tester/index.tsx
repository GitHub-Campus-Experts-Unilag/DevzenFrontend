import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {Compress, ClearInput, Copy} from "@/assets/svg"
import Copied from '@/assets/svg/copied.svg'


const RegExpTester = () => {
    const [value, setValue] = useState("");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<any>("");
    const [showRightBar, setShowRightBar] = useState(true);
    const [isCopied, setIsCopied] = useState(false);
  
    function regexp(newInput:string) {
        try {
            const regex = new RegExp(value, 'gi'); // set the global parameter and the non-sensitivity to cases(lower or upper)
            const search = newInput.match(regex);
            if (search) {
                setOutput(`${search.join('\n')}`); 
                // console.log(search);
            } else {
                setOutput("There are no matches");
                // console.log("No matches");
            }
          } catch (error) {
                setOutput("Invalid regular expression");
                // console.error(error);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>)  => {
        const newInput = e.target.value;
        setInput(newInput);
        regexp(newInput)
    }

    const toggleFields = () => {
        setShowRightBar(prev => !prev);
    };

    const clearRegExp = () => {
        setInput("");
        setOutput("");
    };

    const CopyText = () => {
        const textToCopy = output

        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    setIsCopied(true);
                    console.log("Copied!!!");
                    setTimeout(() => setIsCopied(false), 3000);
                })
                .catch((err) => {
                    console.error("Failed to copy text: ", err);
                });
        } else {
            alert("No parameters to copy!");
        }
    }


    return (
        <div className="bg-[#131313] min-h-screen text-[#BDBDBD] flex flex-col ">
            {/* HEADER */}
            <header className="flex justify-between items-center mb-4 p-3">
                <div>
                    <h1 className="text-2xl text-[#D7D7D7] mb-1">Regexp Tester</h1>
                    <p className="text-sm">Enter a regular expression and a test string to check for matches</p>
                </div>
                <img
                    src={Compress}
                    alt="icon"
                    className="ml-auto cursor-pointer hidden lg:inline-block"
                    onClick={toggleFields}
                />
            </header>
            <div className="p-2">
                <div className="flex gap-4 mb-3">
                    <label htmlFor="example">RegExp: </label>
                    <img src={ClearInput} onClick={toggleFields} className="cursor-pointer"/>
                </div>

                <Input
                    id="example"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Type regexp..."
                    className="custom-class border-none bg-[#1D1D1D]" 
                />
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <main className="flex flex-col md:flex-row flex-grow p-2 ">
                <div className="flex-grow md:w-1/2 ">
                    <div>
                        <div className="flex justify-between mb-3">
                            <div className="flex gap-4">
                                    <h4>Input: </h4>
                                    <img src={ClearInput} onClick={clearRegExp} className="cursor-pointer"/>      
                            </div>
                        </div>
                        <Textarea
                            className="h-96 max-h-screen overflow-auto bg-[#1D1D1D] border-none mb-2 md:mb-0"
                            placeholder="Input strings you want to test..."
                            value={input}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                
                {showRightBar && (
                    <>
                    <hr className="w-[1px] h-auto bg-gray-300 rotate-180 border-none mr-4 ml-4"></hr>
                    <div className="flex-none md:w-1/2">
                        <div className="flex justify-between mb-3">
                            <div className="flex gap-4">
                                    <h4>Input: </h4>
                                    {isCopied ? <img src={Copied}  className="cursor-pointer"/> : <img src={Copy} onClick={CopyText} className="cursor-pointer"/>}
                                          
                            </div>
                        </div>
                        <Textarea
                            value={output}
                            className="h-96 max-h-screen overflow-auto disabled:opacity-70 bg-[#1D1D1D] border-none"
                            disabled
                        />
                    </div>
                    </>
                )}
            
            </main>
        </div>    
    )
}

export default RegExpTester;