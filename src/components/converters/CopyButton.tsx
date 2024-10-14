import ContentCopyIcon from '@mui/icons-material/ContentCopy';
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
        <button className="bg-[#303030] text-xs py-1 px-2 rounded flex items-center self-center gap-1" onClick={() => copyToClipboard()}>
            {copied? "Copied" : "Copy"} 
            {!copied && <ContentCopyIcon className='copy-icon'/>}
        </button>
    )
}

export default CopyButton