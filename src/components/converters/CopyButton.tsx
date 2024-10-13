import ContentCopyIcon from '@mui/icons-material/ContentCopy';


function CopyButton({value}: {value: string}) {
    const copyToClipboard = () => {
        if(value){
            navigator.clipboard.writeText(value).then(()=>{
                alert("Copied to clipboard: " + value)
            })
            .catch(err => {
                console.log("Failed to copy: ", err)
            })
        }
    }
    return(
        <button className="copy-btn" onClick={() => copyToClipboard()}>
            Copy <ContentCopyIcon/>
        </button>
    )
}

export default CopyButton