import projects from '../../data/projects.json';

export async function getStaticPaths() {
  const paths = projects.map((proj) => ({
    params: { id: proj.id }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find((proj) => proj.id === params.id);
  return { props: { project } };
}

export default function ProjectPage({ project }) {
  if (!project) return <div>Projet non trouvé</div>;
  return (
    <>
      <Head>
        <title>{project.title} | Mon Portfolio</title>
        <meta name="description" content={project.description} />
      </Head>
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </>
  );

}
