import React, { useState } from 'react';
import Papa from 'papaparse';
import YAML from 'yaml';
import Icon from '@/assets/grid-4.svg'
import CloseIcon from '@/assets/close.svg';
import CopyIcon from "@/assets/copy.svg";

const CsvTextUpload: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [inputFormat, setInputFormat] = useState<'csv' | 'json' | 'yaml'>('csv');
    const [outputFormat, setOutputFormat] = useState<'csv' | 'json' | 'yaml'>('json');
    const [showFields, setShowFields] = useState(true);
    const [isCopied, setIsCopied] = useState(false);

    const handleInputFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setInputFormat(event.target.value as 'csv' | 'json' | 'yaml');
    };

    const handleOutputFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOutputFormat(event.target.value as 'csv' | 'json' | 'yaml');
    };

    const handleUpload = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputData = event.target.value.trim();
        setInputValue(inputData);

        if (!inputData) {
            alert('Please enter data.');
            return;
        }

        switch (inputFormat) {
            case 'csv':
                Papa.parse(inputData, {
                    header: true,
                    complete: (result) => {
                        setData(result.data);
                    },
                });
                break;

            case 'json':
                try {
                    const parsedData = JSON.parse(inputData);
                    setData(parsedData);
                } catch {
                    alert('Invalid JSON format.');
                }
                break;

            case 'yaml':
                try {
                    const parsedData = YAML.parse(inputData);
                    setData(parsedData);
                } catch {
                    alert('Invalid YAML format.');
                }
                break;

            default:
                break;
        }
    };

    const convertData = (): string => {
        if (data.length === 0) return '';
        let output = '';
        switch (outputFormat) {
            case 'csv':
                output = Papa.unparse(data);
                break;

            case 'json':
                output = JSON.stringify(data, null, 2);
                break;

            case 'yaml':
                output = YAML.stringify(data);
                break;

            default:
                break;
        }
        return output;
    };

    const copyToClipboard = () => {
        const textToCopy = convertData();

        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    setIsCopied(true);
                })
                .catch((err) => {
                    console.error("Failed to copy text: ", err);
                });
        } else {
            alert("No data to copy!");
        }
    };

    const toggleFields = () => {
        setShowFields(prev => !prev);
    };

    const clear = () => {
        setInputValue('');
        setIsCopied(false);
    };

    return (
        <div className="bg-[#131313] min-h-screen text-[#BDBDBD] flex flex-col">
            {/* HEADER */}
            <header className="flex justify-between items-center p-4">
                <div>
                    <h1 className="text-2xl text-[#D7D7D7] mb-1">CSV to JSON</h1>
                    <p className="text-sm">Enter a piece of code to convert it</p>
                </div>
                <img
                    src={Icon}
                    alt="icon"
                    className="ml-auto cursor-pointer hidden lg:inline-block"
                    onClick={toggleFields}
                />
            </header>

            {/* Main Content */}
            <main className="flex flex-col md:flex-row flex-grow">
                {/* Input Section */}
                <div className="flex-grow p-4 md:w-1/2">
                    <div>
                        <div className="flex justify-between mb-3">
                            <div className="flex gap-4">
                                <p>Input:</p>
                                <select value={inputFormat} onChange={handleInputFormatChange} className="ml-2 cursor-pointer bg-gray-500 rounded text-[#BDBDBD]">
                                    <option value="csv">CSV</option>
                                    <option value="json">JSON</option>
                                    <option value="yaml">YAML</option>
                                </select>
                                <button
                                    onClick={clear}
                                    className="flex items-center bg-gray-500 text-[#BDBDBD] text-sm px-1 rounded">
                                    Clear
                                    <img src={CloseIcon} className="w-4 h-4 ml-1"/>
                                </button>
                            </div>
                        </div>
                        <textarea
                            value={inputValue}
                            onChange={handleUpload}
                            placeholder="Paste your data here"
                            rows={10}
                            className="text-[#BDBDBD] w-full h-96 p-2 resize-none bg-[#1D1D1D] border border-gray-500 rounded"
                            style={{ overflow: "auto", whiteSpace: "pre-wrap" }}
                        />
                    </div>
                </div>
                <hr className="w-[1px] h-auto bg-gray-300 rotate-180 border-none"></hr>
                {/* Output Section */}
                {showFields && (
                    <div className="flex-none p-4 md:w-1/2">
                        <div className="flex gap-4 mb-3">
                            <h2 className="text-[#BDBDBD]">Converted Data:</h2>
                            <select value={outputFormat} onChange={handleOutputFormatChange} className="ml-2 bg-gray-500 cursor-pointer rounded">
                                <option value="csv">CSV</option>
                                <option value="json">JSON</option>
                                <option value="yaml">YAML</option>
                            </select>
                            <button
                                onClick={copyToClipboard}
                                className="flex items-center bg-gray-500 text-[#BDBDBD] text-sm px-1 rounded">
                                {isCopied ? "Copied!!!" : "Copy"}
                                {!isCopied && <img src={CopyIcon} className="w-4 h-4 ml-1"/>}
                            </button>
                            
                        </div>
                        <div className="w-full h-96 overflow-auto bg-[#1D1D1D] p-2 border border-gray-500 rounded">
                            <pre>{convertData()}</pre>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default CsvTextUpload;
