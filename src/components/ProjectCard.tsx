import Link from 'next/link';

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="w3-half">
      <Link href={project.link} target="_blank">
        <img 
          src={project.image} 
          className="w3-hover-opacity" 
          style={{ width: '100%' }} 
          alt={project.title} 
        />
      </Link>
    </div>
  );
}
