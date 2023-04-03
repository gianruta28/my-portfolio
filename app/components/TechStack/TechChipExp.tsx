import React, {useState} from 'react'


export interface TechChipProps {
    tech: string;
    experience: string;
}

const TechChipExp: React.FC<TechChipProps> = ({tech, experience}) => {

    const [isHovered, setIsHovered] = useState(false);

    return ( 
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="px-6 mx-1 my-1 w-fit py-1 rounded-full border-2  border-indigo-500 hover:bg-[rgba(99,102,241,0.5)]  text-slate-300">
            {isHovered ? experience : tech}
        </div>
     );
}
 
export default TechChipExp;