import React from 'react'


export interface TechChipProps {
    tech: string
}

const TechChip: React.FC<TechChipProps> = ({tech}) => {
    return ( 
        <div className="px-5 my-1 w-fit py-1 rounded-full border-2 border-slate-300 bg-slate-300">
        {tech}
        </div>
     );
}
 
export default TechChip;