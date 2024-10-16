import { useState } from "react";
import Icon from "../../assets/grid-4.svg";

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
        setShowFields(prev => !prev); // Toggle the visibility of the fields
    };

    return (
        <>
            <div className="bg-black min-h-screen text-white flex flex-col overflow-hidden">
                
                <div className="flex justify-between items-center p-4">
                    <div>
                        <h1 className="text-2xl mb-1">URL Parser</h1>
                        <p >Enter a URL in the input field to parse its components</p>
                    </div>
                    
                    <img 
                        src={Icon} 
                        alt="icon" 
                        className="ml-auto cursor-pointer" 
                        onClick={toggleFields} 
                    />
                </div>

                
                <div className="flex flex-col md:flex-row flex-grow">
                    {/* Input Section */}
                    <div className="flex-grow p-4">
                        
                        <div>
                            <div className="flex justify-between mb-3">
                                <p>Input:</p>
                                <button
                                    onClick={handleClick}
                                    className="bg-gray-500 text-white rounded"
                                >
                                    Change
                                </button>
                            </div>
                            
                            <textarea
                                value={urlString}
                                onChange={(e) => setUrlString(e.target.value)}
                                placeholder="Enter URL..."
                                className="text-black w-full h-96 p-2 resize-none bg-gray-500 border border-gray-500 rounded"
                                style={{ overflow: "auto", whiteSpace: "pre-wrap" }}
                            />
                        </div>
                    </div>

                    {/* Output Section */}
                    {showFields && ( 
                        <div className="flex-none w-full md:w-1/3 p-4 flex flex-col">
                            <div className="flex justify-between mb-2">
                                <h1 className="text-lg font-bold">Field</h1>
                                <h1 className="text-lg font-bold">Value</h1>
                            </div>
                            <div className="grid grid-cols-2 gap-4 bg-gray-600 p-4 rounded">
                                <div className="font-semibold">
                                    <ul className="space-y-2">
                                        <li>Protocol</li>
                                        <li>Host</li>
                                        <li>Path</li>
                                        <li>File Name</li>
                                        <li>Query</li>
                                    </ul>
                                </div>
                                <div className="overflow-hidden">
                                    <ul className="space-y-2">
                                        <li>{urlData ? urlData.protocol : ''}</li>
                                        <li>{urlData ? urlData.host : ''}</li>
                                        <li>{urlData ? urlData.path : ''}</li>
                                        <li>{urlData ? urlData.filename : ''}</li>
                                        <li>{urlData ? urlData.usp : ''}</li>
                                    </ul>
                                </div>
                            </div>

                            <h1 className="mt-4 mb-2">Output:</h1>
                            <div className="w-full flex-grow">
                                <textarea
                                    value={searchParams.length > 0 ? searchParams.join('\n') : 'No parameters found'}
                                    readOnly
                                    className="text-black w-full h-72 max-h-screen p-2 bg-gray-500 resize-none border border-gray-500 rounded"
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
