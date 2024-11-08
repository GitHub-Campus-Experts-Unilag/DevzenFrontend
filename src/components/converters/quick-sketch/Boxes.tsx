import * as React from  'react'
import {AppContext} from './ZenboardContext'
import {Link} from 'react-router-dom';

const formatDate = (): string=>{
    const date = new Date();

    // Extract date components
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = String(date.getFullYear()).slice(-2); // Get the last two digits of the year

    // Extract time components
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // setCurrentDate(`${day}-${month}-${year}, ${hours}:${minutes}`)
    return `${day}-${month}-${year}, ${hours}:${minutes}`;
}
const Boxes = () => {
    const [currentDate] = React.useState(formatDate)
    const context = React.useContext(AppContext);
    if (!context) {
        throw new Error("Component must be used within an AppProvider");
    }
    const {boxes} = context
   
    
    return (
     <section className="p-6 grid grid-cols-3 gap-6">                                                                                                                                                                                   
        {
            boxes.map((box,index)=>{
                return(
                    <div className="w-[324px" key={index}>
                        <Link to={`${index}`}>
                            <div className="h-[224px] bg-white rounded-t-3xl"></div>
                            <div className="bg-[#1C1C1C] p-3 pt-5 text-[#D7D7D7] rounded-b-2xl">
                                <p className="font-semibold mb-1">{box} {index}</p>
                                <p className="text-[13px] font-medium">Last modified: {currentDate}</p>
                            </div>
                        </Link>
                </div>
                )
            })
        }
     </section>
    )
}
export default Boxes  