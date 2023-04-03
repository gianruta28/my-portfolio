import TechChip from "./TechChip";
import {BiCodeAlt} from 'react-icons/bi'
import {MdOutlineExitToApp} from 'react-icons/md'
import React from 'react';


export interface ProjectCardProps {
    title: string;
    imgUrl: string;
    stack: string[];
    codeUrl: string;
    appUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, imgUrl, stack, codeUrl, appUrl}) => {
    return ( 
        <div className="w-96 md:w-full md:h-full my-5 pb-3 lg:w-[25%] lg:min-w-[300px] lg:h-full lg:pb-5 rounded-lg bg-slate-900 shadow-[0_3px_14px_0px_rgb(148,163,184)]">
            <div className="rounded-lg w-full h-60">
                <img className="rounded-t-lg w-full h-full" src={imgUrl} alt="" />
            </div>
            <div className="w-full py-3 flex justify-center">
                <p className="text-2xl text-white">
                    {title}
                </p>
            </div>
            <div className="w-full text-justify px-5">
                <p className="text-lg  text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis augue at quam tincidunt porta. Maecenas in efficitur quam, sit amet aliquam nisi. 
                </p>
            </div>
            <div className="w-full flex flex-wrap justify-around p-3 overflow-x-auto">
                {stack.map((stack:string) => <TechChip tech={stack}/> )}
            </div>
            <div className="w-full px-5 flex justify-between ">
                <div className="border-2 border-indigo-500 hover:bg-[rgba(99,102,241,0.5)]  text-slate-300 w-28 h-12 rounded-lg cursor-pointer flex justify-center items-center">
                    <BiCodeAlt className="text-slate-300 mr-2" size={20}/>
                    <button className="">Code</button>
                
                </div>
                <div className="bg-indigo-600 hover:bg-indigo-500 text-slate-300 w-28 h-12 rounded-lg cursor-pointer flex justify-center items-center">
                    <button  >App</button>
                    <MdOutlineExitToApp className="text-slate-300 ml-2" size={20}/>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectCard;