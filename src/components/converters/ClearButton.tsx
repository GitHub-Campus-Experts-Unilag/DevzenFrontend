import '@fortawesome/fontawesome-free/css/all.min.css';

function ClearButton({ clear }: { clear: () => void }){
    
    return(
        
        <button  className='clear-btn' onClick = {() => clear()}>
            Clear <i className="fas fa-times"></i>
            
        </button>
    )
}

export default ClearButton