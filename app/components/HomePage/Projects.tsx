
import Card from '../generic/Card';
import ProjectCard from '../Projects/ProjectCard';
import ProjectsLists from '../Projects/ProjectsList';



export default function Projects() {

  return (
    <div className="bg-slate-900">
      <div className="relative isolate px-6 py-6 lg:px-8">
        <div className='flex justify-center'>
          <div className="w-[75%] mb-10">
            <div className='pb-10'>
            <h1 className='text-4xl font-bold text-left tracking-tight text-indigo-200 pb-3'>My Projects</h1>
            <div className='lg:w-[55%] w-full'>
              <p className='text-lg text-left tracking-tight text-slate-300 pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis augue at quam tincidunt porta. Maecenas in efficitur quam, sit amet aliquam nisi</p>
            </div>
            </div>
            <ProjectsLists></ProjectsLists>
          </div>
        </div>
      </div>
    </div>
  )
}

