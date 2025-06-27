import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);
  if (!project) return notFound();

  return (
    <div className="w3-padding-64 w3-content">
      <h1 className="w3-text-light-grey">{project.title}</h1>
      <Image 
        className="w3-hover-opacity" 
        src={project.image} 
        style={{ width: '100%' }} 
        alt={project.title} 
      />
      <p>{project.description}</p>
      <a href={project.link} target="_blank" className="w3-button w3-light-grey">
        Voir le projet
      </a>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map(project => ({
    id: project.id,
  }));
}
