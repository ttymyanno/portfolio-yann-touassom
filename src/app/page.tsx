import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w3-padding-large" id="main">
        <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
          <h1 className="w3-jumbo"><span className="w3-hide-small">Je suis</span> Yann Touassom.</h1>
          <h3>Étudiant en BTS SIO deuxième année option SLAM</h3>
          <p>Contrairement à d’autres BTS préparant à une fonction précise, le BTS SIO forme les étudiants à appréhender la diversité des impératifs informatiques au service du développement des entreprises...</p>
          <img src="/images/photo_pro.JPG" alt="Profil" className="w3-image" width="992" height="1108" />
        </header>

        <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
          <h2 className="w3-text-light-grey">À propos</h2>
          <hr style={{ width: '200px' }} className="w3-opacity" />
          <p>Je suis un jeune étudiant en SERVICE INFORMATIQUE AUX ORGANISATIONS. Dynamique et travailleur, je mets beaucoup de rigueur dans tout ce que j’entreprends...</p>
          
          <h3 className="w3-padding-16 w3-text-light-grey">Mes compétences</h3>
          {/* Barres de compétences */}
        </div>

        <div className="w3-padding-64 w3-content" id="projects">
          <h2 className="w3-text-light-grey">Mes projets</h2>
          <hr style={{ width: '200px' }} className="w3-opacity" />
          <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="w3-padding-64 w3-content w3-text-grey" id="veille">
          <h2 className="w3-text-light-grey">Veille Technologique</h2>
          <hr style={{ width: '200px' }} className="w3-opacity" />
          <p><strong>L’observation des nanoparticules :</strong> Le laboratoire national de métrologie et d’essais (LNE) a dévoilé une nouvelle plateforme dédiée à la caractérisation des nanomatériaux...</p>
          <img src="/images/nano.png" alt="Nanotechnologie" style={{ width: '100%' }} />
        </div>

        <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
          <h2 className="w3-text-light-grey">Me Contacter</h2>
          <hr style={{ width: '200px' }} className="w3-opacity" />
          <div className="w3-section">
            <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Palaiseau, France</p>
            <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: +33 7 52 04 88 75</p>
            <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: yann.touassom@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
