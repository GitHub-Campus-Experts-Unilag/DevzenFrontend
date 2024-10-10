import { useState } from "react"
function NumberBaseConverter(){
    const [binary, setBinary] = useState("")
    const [octal, setOctal] = useState("")
    const [decimal, setDecimal] = useState("")
    const [hexadecimal, setHexadecimal] = useState("")

    const handleBinaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const binaryInput = e.target.value
        setBinary(binaryInput)
        const decimalValue = parseInt(binaryInput, 2)
        if(isNaN(decimalValue)){
            setDecimal("")
            setOctal("")
            setHexadecimal("")
        }
        else{
            setDecimal(decimalValue.toString())
            setOctal(decimalValue.toString(8))
            setHexadecimal(decimalValue.toString(16))
        }
    }

    const handleOctalChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const octalInput = e.target.value
        setOctal(octalInput)
        const decimalValue = parseInt(octalInput, 8)
        if(isNaN(decimalValue)){
            setDecimal("")
            setBinary("")
            setHexadecimal("")
        }
        else{
            setDecimal(decimalValue.toString())
            setBinary(decimalValue.toString(2))
            setHexadecimal(decimalValue.toString(16))
        }
    }

    const handleHexadecimalChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const hexadecimalInput = e.target.value
        setHexadecimal(hexadecimalInput)
        const decimalValue = parseInt(hexadecimalInput, 16)
        if(isNaN(decimalValue)){
            setBinary("")
            setDecimal("")
            setOctal("")
        }
        else{
            setDecimal(decimalValue.toString())
            setBinary(decimalValue.toString(2))
            setOctal(decimalValue.toString(8))
        }
    }

    const handleDecimalChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const decimalInput = e.target.value
        setDecimal(decimalInput)
        const decimalValue = parseInt(decimalInput)
        if(isNaN(decimalValue)){
            setBinary("")
            setHexadecimal("")
            setOctal("")
        }
        else{
            setBinary(decimalValue.toString())
            setOctal(decimalValue.toString(8))
            setHexadecimal(decimalValue.toString(16))
        }
    }

    return(
        <>
            <h1>Number Base Converter</h1>
            <p>Enter a number in any filed, and the other bases will be calculated automatically</p>
            <form action="">
                <label htmlFor="">Binary(Base2): </label>
                <input type="text" onChange={handleBinaryChange} value={binary}/>
                <label htmlFor="">Octal(Base 8): </label>
                <input type="text"  onChange={handleOctalChange} value={octal}/>
                <label htmlFor="">Decimal (Base 10)</label>
                <input type="text"  onChange={handleDecimalChange} value={decimal}/>
                <label htmlFor="">Hexadecimal (Base 16): </label>
                <input type="text"  onChange={handleHexadecimalChange} value={hexadecimal}/>
                <label htmlFor="">Select base: </label>
                <input type="" />
            </form>
        </>
    )
}
export default NumberBaseConverter