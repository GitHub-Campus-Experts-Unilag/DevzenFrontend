import { X } from 'lucide-react';

function ClearButton({ clear }: { clear: () => void }){
    
    return(
        
        <button  className="bg-[#303030] text-black-20 text-xs py-1 px-2 rounded flex items-center self-center gap-1" onClick = {() => clear()}>
            Clear <X className="w-4 h-4 -mb-[3px]" />
            
        </button>
    )
}

export default ClearButton