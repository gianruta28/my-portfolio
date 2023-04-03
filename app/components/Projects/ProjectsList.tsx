import ProjectCard from "./ProjectCard";

const ProjectsLists = () => {
    return ( 
        <div className="w-full flex flex-wrap justify-evenly sm:flex-wrap md:flex-wrap">
                <ProjectCard stack={['Javascript', 'PHP', 'MySQL', 'Angular', 'Symfony', 'ExtJS']} title='Gestfy: ISP Software' imgUrl="/img/project_1.jpg" appUrl="a" codeUrl="a"></ProjectCard>
                <ProjectCard stack={['TypeScript', 'React', 'MongoDB', 'NextJS', 'TailwindCSS']} title='Netflix Clone' imgUrl="/img/project_2.jpg" appUrl="a" codeUrl="a"></ProjectCard>
                {/* <ProjectCard></ProjectCard> */}
        </div>
     );
}
 
export default ProjectsLists;