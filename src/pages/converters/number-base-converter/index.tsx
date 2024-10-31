import { useState } from "react";
import "@/components/converters/number-base-converter/NumberBaseConverter.css";
import ClearButton from "@/components/converters/number-base-converter/ClearButton";
import CopyButton from "@/components/converters/number-base-converter/CopyButton";

import { ChevronLeft, ChevronRight } from "lucide-react";

function NumberBaseConverter() {
  const [binary, setBinary] = useState("");
  const [octal, setOctal] = useState("");
  const [decimal, setDecimal] = useState("");
  const [hexadecimal, setHexadecimal] = useState("");
  const [selectedBase, setSelectedBase] = useState(36);
  const [selectedBaseInput, setSelectedBaseInput] = useState("");

  const [binaryError, setBinaryError] = useState("");
  const [octalError, setOctalError] = useState("");
  const [hexadecimalError, setHexadecimalError] = useState("");
  const [decimalError, setDecimalError] = useState("");
  const [selectedBaseInputError, setSelectedBaseInputError] = useState("");

  //Clear all inputs
  const clearBinary = () => setBinary("");
  const clearOctal = () => setOctal("");
  const clearDecimal = () => setDecimal("");
  const clearHex = () => setHexadecimal("");
  const clearSelectedBaseInput = () => setSelectedBaseInput("");

  //Base Increase/ decrease in select base section
  const increaseBase = () => {
    setSelectedBase((prevBase) => prevBase + 1);
  };

  const decreaseBase = () => {
    setSelectedBase((prevBase) => (prevBase > 2 ? prevBase - 1 : prevBase));
  };

  const handleBinaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const binaryInput = e.target.value;
    if (!/^[0-1]*$/.test(binaryInput)) {
      setBinaryError("Binary must only contain 0 or 1");
    } else {
      setBinaryError("");
      setBinary(binaryInput);
      const decimalValue = parseInt(binaryInput, 2);
      if (isNaN(decimalValue)) {
        setDecimal("");
        setOctal("");
        setHexadecimal("");
      } else {
        setDecimal(decimalValue.toString());
        setOctal(decimalValue.toString(8));
        setHexadecimal(decimalValue.toString(16));
        setSelectedBaseInput(decimalValue.toString(selectedBase).toUpperCase());
      }
    }
  };

  const handleOctalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const octalInput = e.target.value;
    if (!/^[0-7]*$/.test(octalInput)) {
      setOctalError("Octal numbers must only contain digits from 0 to 7");
    } else {
      setOctalError("");
      setOctal(octalInput);
      const decimalValue = parseInt(octalInput, 8);
      if (isNaN(decimalValue)) {
        setDecimal("");
        setBinary("");
        setHexadecimal("");
      } else {
        setDecimal(decimalValue.toString());
        setBinary(decimalValue.toString(2));
        setHexadecimal(decimalValue.toString(16).toUpperCase());
        setSelectedBaseInput(decimalValue.toString(selectedBase).toUpperCase());
      }
    }
  };

  const handleHexadecimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hexadecimalInput = e.target.value;
    if (!/^[0-9a-fA-F]*$/.test(hexadecimalInput)) {
      setHexadecimalError(
        "Hexadecimal numbers must contain only digits between 0-9 or letters A-F"
      );
    } else {
      setHexadecimalError("");
      setHexadecimal(hexadecimalInput);
      const decimalValue = parseInt(hexadecimalInput, 16);
      if (isNaN(decimalValue)) {
        setBinary("");
        setDecimal("");
        setOctal("");
      } else {
        setDecimal(decimalValue.toString());
        setBinary(decimalValue.toString(2));
        setOctal(decimalValue.toString(8));
        setSelectedBaseInput(decimalValue.toString(selectedBase).toUpperCase());
      }
    }
  };

  const handleDecimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const decimalInput = e.target.value;
    if (!/^\d*$/.test(decimalInput)) {
      setDecimalError("Decimal must contain digits from 0 to 9");
    } else {
      setDecimalError("");
      setDecimal(decimalInput);
      const decimalValue = parseInt(decimalInput);
      if (isNaN(decimalValue)) {
        setBinary("");
        setHexadecimal("");
        setOctal("");
      } else {
        setBinary(decimalValue.toString(2));
        setOctal(decimalValue.toString(8));
        setHexadecimal(decimalValue.toString(16).toUpperCase());
        setSelectedBaseInput(decimalValue.toString(selectedBase).toUpperCase());
      }
    }
  };

  const handleSelectedBaseInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = e.target.value;
    const regex = new RegExp(
      `^[0-${(selectedBase - 1).toString(36).toUpperCase()}]*$`
    );
    if (!regex.test(input)) {
      setSelectedBaseInputError("Input doesn't match the base picked");
    } else {
      setSelectedBaseInputError("");
      setSelectedBaseInput(input);

      //Validate input for selected base

      const decimalValue = parseInt(input, selectedBase);
      if (isNaN(decimalValue)) {
        clearBinary();
        clearOctal();
        clearHex();
        setDecimal("");
      } else {
        setDecimal(decimalValue.toString());
        setBinary(decimalValue.toString(2));
        setOctal(decimalValue.toString(8));
        setHexadecimal(decimalValue.toString(16).toUpperCase());
      }
    }
  };

  return (
    <div className="flex flex-col gap-2 bg-[#131313] text-whitesmoke ml-">
      <header className="flex flex-col m-6 ml-8 gap-4">
        <h1 className="text-[1.75rem] text-black-10 font-bold">Number Base Converter</h1>
        <p className="text-black-20 text-base leading-5">
          Enter a number in any field, and the other bases will be calculated automatically.
        </p>
      </header>

      <main className="mb-6">
          <div className="py-6 pl-8 border-b-2 border-black-80">
            <div className="mb-4 flex gap-2 items-center self-center">
              <label
                htmlFor="binary-input"
                className="text-black-20 font-semibold text-[1.0625rem] mr-2"
              >Binary (Base 2):</label>
              <ClearButton clear={clearBinary} />
            </div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <input
                id="binary-input"
                type="text"
                onChange={handleBinaryChange}
                value={binary}
                className="font-medium border-b-2 border-black-60 bg-black-80 text-black-10 rounded-sm w-4/5 p-3"
              />
              <CopyButton value={binary} />
            </div>
            {binaryError && <p className="text-red-600 text-base">{binaryError}</p>}
          </div>
          <div className="py-6 pl-8 border-b-2 border-black-80">
            <div className="mb-4 flex gap-2 items-center self-center">
              <label
                htmlFor="octal-input"
                className="text-black-20 font-semibold text-[1.0625rem] mr-2"
              >Octal (Base 8):</label>
              <ClearButton clear={clearOctal} />
            </div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <input
                id="octal-input"
                type="text"
                onChange={handleOctalChange}
                value={octal}
                className="font-medium border-b-2 border-black-60 bg-black-80 text-black-10 rounded-sm w-4/5 p-3"
              />
              <CopyButton value={octal} />
            </div>
            {octalError && <p className="text-red-600 text-base">{octalError}</p>}
          </div>
          <div className="py-6 pl-8 border-b-2 border-black-80">
            <div className="mb-4 flex gap-2 items-center self-center">
              <label
                htmlFor="decimal-input"
                className="text-black-20 font-semibold text-[1.0625rem] mr-2"
              >Decimal (Base 10):</label>
              <ClearButton clear={clearDecimal} />
            </div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <input
                id="decimal-input"
                type="text"
                onChange={handleDecimalChange}
                value={decimal}
                className="font-medium border-b-2 border-black-60 bg-black-80 text-black-10 rounded-sm w-4/5 p-3"
              />
              <CopyButton value={decimal} />
            </div>
            {decimalError && <p className="text-red-600 text-base">{decimalError}</p>}
          </div>
          <div className="py-6 pl-8 border-b-2 border-black-80">
            <div className="mb-4 flex gap-2 items-center self-center">
              <label
                htmlFor="hexadecimal-input"
                className="text-black-20 font-semibold text-[1.0625rem] mr-2"
              >Hexadecimal (Base 16):</label>
              <ClearButton clear={clearHex} />
            </div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <input
                id="hexadecimal-input"
                type="text"
                onChange={handleHexadecimalChange}
                value={hexadecimal}
                className="font-medium border-b-2 border-black-60 bg-black-80 text-black-10 rounded-sm w-4/5 p-3"
              />
              <CopyButton value={hexadecimal} />
            </div>
            {hexadecimalError && <p className="text-red-600 text-base">{hexadecimalError}</p>}
          </div>
          <div className="py-6 pl-8 border-b-2 border-black-80">
            <div className="text-black-20 mb-4 flex gap-2 items-center self-center">
              <label
                htmlFor="custom-base-input"
                className="text-black-20 font-semibold text-[1.0625rem] mr-2"
              >Select base:</label>
              <div className="bg-[#303030] text-xs py-1 px-2 rounded flex items-center justify-between gap-2">
                <button onClick={decreaseBase}>
                  <ChevronLeft className="text-black-10 bg-black-50 w-4 rounded-sm" />
                </button>
                <span className="font-medium text-[0.8125rem]"> {selectedBase} </span>
                <button onClick={increaseBase}>
                  <ChevronRight className="text-black-10 bg-black-50 w-4 rounded-sm" />
                </button>
              </div>
              <ClearButton clear={clearSelectedBaseInput} />
            </div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <input
                id="custom-base-input"
                type="text"
                onChange={handleSelectedBaseInputChange}
                value={selectedBaseInput}
                className="font-medium border-b-2 border-black-60 bg-black-80 text-black-10 rounded-sm w-4/5 p-3"
              />
              <CopyButton value={selectedBaseInput} />
            </div>
            {selectedBaseInputError && (
              <p className="text-red-600 text-base">{selectedBaseInputError}</p>
            )}
          </div>
      </main>
    </div>
  );
}
export default NumberBaseConverter;
