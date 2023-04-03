import ProjectsLists from "../Projects/ProjectsList";
import {HiServerStack} from 'react-icons/hi2'
import {FaClipboardList} from 'react-icons/fa'
import {BsFront} from 'react-icons/bs'

import TechStackCard from "../TechStack/TechStackCard";

const TechStack = () => {

  const backendTechs = [
    {
      name: 'PHP',
      experience: '4 Years'
    },
    {
      name: 'Symfony',
      experience: '4 Years'
    },
    {
      name: 'Node.js',
      experience: '2 Years'
    },
  ];

  const frontedTechs = [
    {
      name: 'Javascript',
      experience: '4 Years'
    },
    {
      name: 'Typescript',
      experience: '2 Years'
    },
    {
      name: 'Angular',
      experience: '3 Years'
    },
    {
      name: 'React',
      experience: 'Less than a year'
    },
    {
      name: 'Nextjs',
      experience: 'Less than a year'
    },
  ];

  const othersTechs = [
    {
      name: 'Relationals DB',
      experience: '4 Years'
    },
    {
      name: 'NoSQL DBs',
      experience: '1 Years'
    },
    {
      name: 'Web3 knowledge',
      experience: '2 Years'
    },
  ];

    return (
        <div className="bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="relative isolate px-6 py-6 lg:px-8">
          <div className='flex justify-center'>
            <div className="w-[60%]  h-full mb-10">
                <div className="flex justify-end">
                  <div className='pb-10'>
                    <div>
                        <h1 className='text-4xl font-bold text-right tracking-tight text-indigo-200 pb-3'>My Tech Stack</h1>
                    </div>
                    <div className='w-full'>
                        <p className='text-lg text-right tracking-tight text-slate-300 pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis augue at quam tincidunt porta. Maecenas in efficitur quam, sit amet aliquam nisi</p>
                    </div>
                  </div>
                </div>
                <div className="lg:flex lg:justify-around">
                  <TechStackCard title="Backend" techs={backendTechs} icon={<HiServerStack className='text-indigo-100' size={21}/>}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis augue at quam tincidunt porta."/>
                  <TechStackCard title="Fronted" techs={frontedTechs} icon={<BsFront className='text-indigo-100' size={21}/>}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis augue at quam tincidunt porta."/>
                  <TechStackCard title="Others" techs={othersTechs} icon={<FaClipboardList className='text-indigo-100' size={21}/>}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis augue at quam tincidunt porta."/>
              
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}
 
export default TechStack;