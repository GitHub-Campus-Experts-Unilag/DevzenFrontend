import * as React from  'react'
import {AppContext} from '../../../Context'
import {useNavigate} from 'react-router-dom'

import {NewBoard} from '@/assets/svg'

const Header = () => {  
  const navigate = useNavigate()
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("Component must be used within an AppProvider");
  }
  const {boxes,setBoxes} = context

  const newBoard=()=>{
    const updatedBoxes = [...boxes]
    updatedBoxes.push('Untitled')
    setBoxes(updatedBoxes)
    const lastIndex = updatedBoxes.length-1
    navigate(`/dashboard/quick-sketch/zenboard/${lastIndex}`)
  }

  return (
    <div className='flex justify-between items-start p-6 '>
        <div>
            <h1 className='text-[28px] text-[#D7D7D7] font-bold mb-4'>Zenboard</h1>
            <p className='text-[#BDBDBD]'>Sketch out an idea and invite others to collaborate with you.</p>
        </div>
        <img src={NewBoard} alt="NewBoard Icon" onClick={newBoard}/>
      </div>
    )
}
export default Header  