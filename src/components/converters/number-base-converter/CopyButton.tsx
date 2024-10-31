import { Copy } from 'lucide-react';
import { useState } from "react";

function CopyButton({value}: {value: string}) {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = () => {
        if(value){
            navigator.clipboard.writeText(value).then(()=>{
                /* alert("Copied to clipboard: " + value) */
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            })
            .catch(err => {
                console.log("Failed to copy: ", err)
                setCopied(false)
            })
        }
    }
    return(
        <button className="bg-black-60 text-black-20 text-xs py-1 px-2 rounded flex gap-1" onClick={() => copyToClipboard()}>
            {copied? "Copied" : "Copy"} 
            {!copied && <Copy className="w-4 h-4 ml-0.5" />}
        </button>
    )
}

export default CopyButton