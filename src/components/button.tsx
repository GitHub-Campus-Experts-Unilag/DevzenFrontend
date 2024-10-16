import React from "react";


interface ButtonProps{
    className: string;
    text: string;
    icon: string;
    onClick: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({className, text, icon, onClick}) => {

    return(
        <button
            className={`flex items-center justify-center gap-2 px-2 py-1 text-white rounded-md  ${className} w-64`}
            onClick={onClick}
        >
            <img src={icon} alt="Icon" className="w-6 h-6" />
            <span>{text}</span>
        </button>

    )
} 

export default ButtonComponent;