import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

function OpenInBrowserBtn(){
    
    return(
        
        <button  className="bg-[#303030] text-xs py-1 px-2 rounded flex items-center self-center gap-1" 
        onClick={() => window.open('https://example.com', '__blank')}>
            Open in browser <OpenInBrowserIcon/>
            
        </button>
    )
}

export default OpenInBrowserBtn