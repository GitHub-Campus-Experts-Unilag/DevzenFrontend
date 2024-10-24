import { useState } from "react";
import Icon from "../../../assets/grid-4.svg";
import CloseIcon from "../../../assets/close.svg"
import CopyIcon from "../../../assets/copy.svg"


interface UrlObject {
    protocol: string;
    host: string;
    path: string;
    filename: string;
    usp: string;
}

function URLParser() {
    const [urlString, setUrlString] = useState('');
    const [urlData, setUrlData] = useState<UrlObject | null>(null);
    const [searchParams, setSearchParams] = useState<string[]>([]);
    const [showFields, setShowFields] = useState(true);
    const [isCopied, setIsCopied] = useState(false);

    const handleClick = () => {
        const url = new URL(urlString.startsWith("http") ? urlString : `https://${urlString}`);

        const protocol = url.protocol.replace(":", '');
        const host = url.host;
        const pathname = url.pathname;
        const path = pathname.substring(0, pathname.lastIndexOf("/"));
        const filename = pathname.substring(pathname.lastIndexOf("/") + 1);

        const query = urlString.includes('?')
            ? urlString.split('?')[1]
            : urlString;

        const urlsp = new URLSearchParams(query);
        const usp = urlsp.toString();

        setUrlData({
            protocol,
            host,
            path,
            filename,
            usp
        });


        const paramsArray: string[] = [];
        for (const [key, value] of urlsp) {
            paramsArray.push(`${key}: ${value}`);
        }
        setSearchParams(paramsArray);
    };

    const toggleFields = () => {
        setShowFields(prev => !prev);
    };


    const Copy = () => {

        const textToCopy = searchParams.join('\n');

        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    setIsCopied(true);
                })
                .catch((err) => {
                    console.error("Failed to copy text: ", err);
                });
        } else {
            alert("No parameters to copy!");
        }
    };


    const clear = () => {
        setUrlString('')
        setUrlData(null);
        setSearchParams([]);
        setIsCopied(false);
    }

    return (
        <>
            <div className="bg-[#131313] min-h-screen text-[#BDBDBD] flex flex-col overflow-hidden">

                <div className="flex justify-between items-center p-4">
                    <div>
                        <h1 className="text-2xl text-[#D7D7D7] mb-1">URL Parser</h1>
                        <p className="text-sm" >Enter a URL in the input field to parse its components</p>
                    </div>

                    <img
                        src={Icon}
                        alt="icon"
                        className="ml-auto cursor-pointer hidden lg:inline-block"
                        onClick={toggleFields}
                    />
                </div>


                <div className="flex flex-col md:flex-row flex-grow">
                    {/* Input Section */}
                    <div className="flex-grow p-4">

                        <div>
                            <div className="flex justify-between mb-3">
                                <div className="flex gap-4">
                                    <p>Input:</p>
                                    <button
                                        onClick={clear}
                                        className="flex items-center bg-gray-500 text-[#BDBDBD] text-sm px-0.5  rounded">
                                        Clear
                                        <img src={CloseIcon} className=" w-4 h-4" />
                                    </button>
                                </div>

                                <button
                                    onClick={handleClick}
                                    className="bg-gray-500 text-[#BDBDBD] rounded px-1"
                                >
                                    Change
                                </button>
                            </div>

                            <textarea
                                value={urlString}
                                onChange={(e) => setUrlString(e.target.value)}
                                placeholder="Enter URL..."
                                className="text-[#BDBDBD] w-full h-96 p-2 resize-none bg-[#1D1D1D] border border-gray-500 rounded"
                                style={{ overflow: "auto", whiteSpace: "pre-wrap" }}
                            />
                        </div>
                    </div>
                    <hr className="w-[1px] h-auto bg-gray-300 rotate-180 border-none"></hr>
                    {/* Output Section */}
                    {showFields && (
                        <div className="flex-none w-full md:w-1/3 p-4 flex flex-col">
                            <div className="flex justify-between mb-2 text-[#BDBDBD">
                                <h2 >Field</h2>
                                <h2 >Value</h2>
                            </div>
                            <div className="grid grid-cols-2 gap-4 bg-[#1D1D1D] text-[#BDBDBD] p-4 rounded">
                                <div >
                                    <ul className="space-y-2">
                                        <li>Protocol</li>
                                        <li>Host</li>
                                        <li>Path</li>
                                        <li>File Name</li>
                                        <li>Query</li>
                                    </ul>
                                </div>
                                <div className="overflow-hidden">
                                    <ul className="space-y-2 text-[#BDBDBD]">
                                        <li>{urlData ? urlData.protocol : ''}</li>
                                        <li>{urlData ? urlData.host : ''}</li>
                                        <li>{urlData ? urlData.path : ''}</li>
                                        <li>{urlData ? urlData.filename : ''}</li>
                                        <li>{urlData ? urlData.usp : ''}</li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="border-t border-gray-300 my-4" />
                            <div className="flex gap-4 mb-3">
                                <h2 className="text-[#BDBDBD]">Output:</h2>
                                <button
                                    onClick={Copy}
                                    className="flex items-center bg-gray-500 text-[#BDBDBD] text-sm px-0.5  rounded">
                                    {isCopied ? "Copied!!!" : "Copy"}
                                    {!isCopied && <img src={CopyIcon} className="w-4 h-4 ml-1" />}
                                </button>
                            </div>

                            <div className="w-full flex-grow">
                                <textarea
                                    value={searchParams.length > 0 ? searchParams.join('\n') : 'No parameters found'}
                                    readOnly
                                    className="text-[#BDBDBD] w-full h-72 max-h-screen p-2 bg-[#1D1D1D] resize-none border border-gray-500 rounded"
                                    style={{ overflow: "auto", whiteSpace: "pre-wrap" }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default URLParser;
