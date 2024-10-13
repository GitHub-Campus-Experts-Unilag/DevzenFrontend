import { useState } from "react";
import "./NumberBaseConverter.css";
import "./ClearButton";
import "./CopyButton";
import ClearButton from "./ClearButton";
import CopyButton from "./CopyButton";

function NumberBaseConverter() {
  const [binary, setBinary] = useState("");
  const [octal, setOctal] = useState("");
  const [decimal, setDecimal] = useState("");
  const [hexadecimal, setHexadecimal] = useState("");

  //Clear all inputs
  const clearBinary = () => {
    setBinary("")
  }

  const clearOctal = () => {
    setOctal("")
  }

  const clearDecimal = () => {
    setDecimal("")
  }

  const clearHex = () => {
    setHexadecimal("")
  }



  const handleBinaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const binaryInput = e.target.value;
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
    }
  };

  const handleOctalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const octalInput = e.target.value;
    setOctal(octalInput);
    const decimalValue = parseInt(octalInput, 8);
    if (isNaN(decimalValue)) {
      setDecimal("");
      setBinary("");
      setHexadecimal("");
    } else {
      setDecimal(decimalValue.toString());
      setBinary(decimalValue.toString(2));
      setHexadecimal(decimalValue.toString(16));
    }
  };

  const handleHexadecimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hexadecimalInput = e.target.value;
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
    }
  };

  const handleDecimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const decimalInput = e.target.value;
    setDecimal(decimalInput);
    const decimalValue = parseInt(decimalInput);
    if (isNaN(decimalValue)) {
      setBinary("");
      setHexadecimal("");
      setOctal("");
    } else {
      setBinary(decimalValue.toString(2));
      setOctal(decimalValue.toString(8));
      setHexadecimal(decimalValue.toString(16));
    }
  };

  return (
    <div className="numberBaseConverterContainer">
      <div className="number-base-converter-heading">
        <h1>Number Base Converter</h1>
        <p>
          Enter a number in any filed, and the other bases will be calculated
          automatically
        </p>
      </div>

      <div className="main-conversion-section">
        <div className="base-specific-section">
          <div className="each-base-conversion-heading">
            <label htmlFor="">Binary(Base2): </label>
            <ClearButton clear={clearBinary}/>
          </div>
          <div className="input-and-copy">
            <input type="text" onChange={handleBinaryChange} value={binary} />
            <CopyButton  value ={binary}/>
          </div>
        </div>
        <hr />

        <div className="base-specific-section">
          <div className="each-base-conversion-heading">
            <label htmlFor="">Octal(Base 8): </label>
            <ClearButton  clear ={clearOctal}/>
          </div>
          <div className="input-and-copy">
            <input type="text" onChange={handleOctalChange} value={octal} />
            <CopyButton value={octal}/>
          </div>
        </div>
        <hr />

        <div className="base-specific-section">
          <div className="each-base-conversion-heading">
            <label htmlFor="">Decimal (Base 10)</label>
            <ClearButton clear={clearDecimal}/>
          </div>
          <div className="input-and-copy">
            <input type="text" onChange={handleDecimalChange} value={decimal} />
            <CopyButton value={decimal}/>
          </div>
        </div>
        <hr />

        <div className="base-specific-section">
          <div className="each-base-conversion-heading">
            <label htmlFor="">Hexadecimal (Base 16): </label>
            <ClearButton clear={clearHex} />
          </div>
          <div className="input-and-copy">
            <input
              type="text"
              onChange={handleHexadecimalChange}
              value={hexadecimal}
            />
            <CopyButton value={hexadecimal}/>
          </div>
        </div>
        <hr />

        <div className="base-specific-section">
          <div className="each-base-conversion-heading">
            <label htmlFor="">Select base: </label>
            
          </div>
          <div className="input-and-copy">
            <input type="" />
            
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
export default NumberBaseConverter;
