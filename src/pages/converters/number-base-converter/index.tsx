import { useState } from "react";
import "@/components/converters/number-base-converter/NumberBaseConverter.css";
import ClearButton from "@/components/converters/number-base-converter/ClearButton";
import CopyButton from "@/components/converters/number-base-converter/CopyButton";

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
    <div className="flex flex-col m-8 gap-2 bg-[#131313] text-whitesmoke ml-">
      <div className="flex flex-col mx-6 my-9 gap-4">
        <h1 className="text-xl">Number Base Converter</h1>
        <p className="text-[#bdbdbd] text-base leading-5">
          Enter a number in any field, and the other bases will be calculated
          automatically
        </p>
      </div>

      <div className="ml-5">
        <div className="my-4">
          <div className="mb-4 flex gap-2 items-center self-center">
            <label htmlFor="">Binary(Base2): </label>
            <ClearButton clear={clearBinary} />
          </div>
          <div className="flex gap-1.5">
            <input
              type="text"
              onChange={handleBinaryChange}
              value={binary}
              className="border-2 border-black bg-[#303030] text-white w-4/5 p-[3px]"
            />
            <CopyButton value={binary} />
          </div>
          {binaryError && <p className="text-red-600 text-base">{binaryError}</p>}
        </div>
        <div className="w-9/10 bg-[#303030] h-px divider"></div>



        <div className="my-4">
          <div className="mb-4 flex gap-2 items-center self-center">
            <label htmlFor="">Octal(Base 8): </label>
            <ClearButton clear={clearOctal} />
          </div>
          <div className="flex gap-1.5">
            <input
              type="text"
              onChange={handleOctalChange}
              value={octal}
              className="border-2 border-black bg-[#303030] text-white w-4/5 p-[3px]"
            />
            <CopyButton value={octal} />
          </div>
          {octalError && <p className="text-red-600 text-base">{octalError}</p>}
        </div>
        <div className="w-9/10 bg-[#303030] h-px"></div>

        <div className="my-4">
          <div className="mb-4 flex gap-2 items-center self-center">
            <label htmlFor="">Decimal (Base 10)</label>
            <ClearButton clear={clearDecimal} />
          </div>
          <div className="flex gap-1.5">
            <input
              type="text"
              onChange={handleDecimalChange}
              value={decimal}
              className="border-2 border-black bg-[#303030] text-white w-4/5 p-[3px]"
            />
            <CopyButton value={decimal} />
          </div>
          {decimalError && <p className="text-red-600 text-base">{decimalError}</p>}
        </div>
        <div className="w-9/10 bg-[#303030] h-px"></div>

        <div className="my-4">
          <div className="mb-4 flex gap-2 items-center self-center">
            <label htmlFor="">Hexadecimal (Base 16): </label>
            <ClearButton clear={clearHex} />
          </div>
          <div className="flex gap-1.5">
            <input
              type="text"
              onChange={handleHexadecimalChange}
              value={hexadecimal}
              className="border-2 border-black bg-[#303030] text-white w-4/5 p-[3px]"
            />
            <CopyButton value={hexadecimal} />
          </div>
          {hexadecimalError && <p className="text-red-600 text-base">{hexadecimalError}</p>}
        </div>
        <div className="w-9/10 bg-[#303030] h-px"></div>

        <div className="my-4">
          <div className="mb-4 flex gap-2 items-center self-center">
            <label htmlFor="">Select base: </label>
            <div className="bg-[#303030] text-xs py-1 px-2 rounded flex items-center justify-between gap-2">
              <button onClick={decreaseBase} className="bg-[#545353] rounded-[3px] w-[18px] h-[18px] flex items-center justify-center border border-[#6a6a6a]">
                &lt;
              </button>
              <span> {selectedBase} </span>
              <button onClick={increaseBase} className="bg-[#545353] rounded-[3px] w-[18px] h-[18px] flex items-center justify-center border border-[#6a6a6a]">
                &gt;
              </button>
            </div>
            <ClearButton clear={clearSelectedBaseInput} />
          </div>
          <div className="flex gap-1.5">
            <input
              type="text"
              onChange={handleSelectedBaseInputChange}
              value={selectedBaseInput}
              className="border-2 border-black bg-[#303030] text-white w-4/5 p-[3px]"
            />
            <CopyButton value={selectedBaseInput} />
          </div>
          {selectedBaseInputError && (
            <p className="text-red-600 text-base">{selectedBaseInputError}</p>
          )}
        </div>
        <div className="w-9/10 bg-[#303030] h-px"></div>
      </div>
    </div>
  );
}
export default NumberBaseConverter;
