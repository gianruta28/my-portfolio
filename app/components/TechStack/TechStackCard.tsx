import React, { ReactElement } from 'react';
import {HiServerStack} from 'react-icons/hi2'
import TechChipExp from './TechChipExp';


export interface TechStackCardProps {
    title: string;
    description: string;
    icon: ReactElement<any, any>;
    techs: any[];
}

const TechStackCard: React.FC<TechStackCardProps> = ({title, description, techs, icon}) => {
    return ( 
        <div className="h-[22rem] lg:h-72 w-full lg:w-[30%] my-3 rounded-md bg-gradient-to-b from-indigo-500 to-indigo-300 p-1 ">
            <div className="relative h-full w-full items-center justify-center bg-slate-800">
                <div className="text-2xl flex justify-center items-center absolute top-3 left-3 text-indigo-100">
                   <p className="font-bold mr-2"> {title}</p>
                   {icon}
                </div>
                <div className='w-full h-24 absolute top-10 left-3 mt-1 pr-5 text-justify text-slate-300 '>
                    {description} 
                </div>
                <div className='w-full absolute lg:top-28 lg:mt-3 top-36 text-xs lg:text-base pt-5 left-3 flex justify-around flex-wrap pr-5'>
                    {techs.map((tech) => <TechChipExp tech={tech.name} experience={tech.experience}/>)}
                    
                </div>
            </div>
        </div>  
     );
}
 
export default TechStackCard;