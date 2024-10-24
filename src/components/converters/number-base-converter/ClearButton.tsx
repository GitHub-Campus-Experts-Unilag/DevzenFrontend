import '@fortawesome/fontawesome-free/css/all.min.css';

function ClearButton({ clear }: { clear: () => void }){
    
    return(
        
        <button  className="bg-[#303030] text-xs py-1 px-2 rounded flex items-center self-center gap-1" onClick = {() => clear()}>
            Clear <i className="fas fa-times -mb-[3px]"></i>
            
        </button>
    )
}

export default ClearButton