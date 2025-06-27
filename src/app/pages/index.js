import Link from 'next/link';
import projects from '../data/projects.json';

export default function Home() {
  return (
    <div>
      <h1>Mon Portfolio</h1>
      <ul>
        {projects.map((proj) => (
          <li key={proj.id}>
            <Link href={`/projects/${proj.id}`}>{proj.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
