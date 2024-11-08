type BoardProps = {
    box: string
    index?: string
}
import { Users,ShareButton,ArrowLeft } from "@/assets/svg"
import {useNavigate} from 'react-router-dom'

const BoardNav = ({box,index}:BoardProps) => {
    const navigate = useNavigate()
  return (
    <div className="bg-[#131313] flex justify-between items-center px-6 py-8 pt-6">
        <div className="flex items-center gap-px cursor-pointer" onClick={()=>navigate('/dashboard/quick-sketch/zenboard/')}>
            <img src={ArrowLeft} alt="ArrowLeft" />
            <p className="text-[28px] font-bold text-[#D7D7D7]">{box} {index}</p>
        </div>
        <div className="flex items-center gap-x-4">
            <img src={Users} alt="Users" />
            <img src={ShareButton} alt="ShareButton" />
        </div>
    </div>
  )
}
export default BoardNav