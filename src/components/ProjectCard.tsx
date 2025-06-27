import Image from 'next/image';
import { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <a 
          href={project.link} 
          target="_blank"
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          Voir le projet
          <i className="fa fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  );
}
