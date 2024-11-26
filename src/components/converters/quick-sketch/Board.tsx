import * as React from  'react'
import {AppContext} from '../../../Context'
import {useParams,useNavigate} from 'react-router-dom'
import BoardNav from './BoardNav'

const Board = () => {
  const navigate = useNavigate() 
    const context = React.useContext(AppContext);
    if (!context) {
        throw new Error("Component must be used within an AppProvider");
    }
    const {boxes} = context
    const { index } = useParams<{ index?: string }>(); 
    const boxIndex = index ? parseInt(index, 10) : undefined;  //to convert index to number

    // path to go when index is undefined
    React.useEffect(() => {
      if (boxIndex === undefined || isNaN(boxIndex) || boxIndex < 0 || boxIndex >= boxes.length) {
          navigate('/dashboard/quick-sketch/zenboard/');
      }
  }, [boxIndex, navigate, boxes.length]);

    // error message when index is undefined
    if (boxIndex === undefined || isNaN(boxIndex) || boxIndex < 0 || boxIndex >= boxes.length) {
        return <div>Box not found</div>; 
    }

    const box = boxes[boxIndex]

  return (
    <div className='bg-white h-full'>
        <BoardNav box={box} index={index}/>
  </div>
  )
}

export default Board