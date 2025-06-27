import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import SkillBar from '@/components/SkillBar';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Navbar />
      
      {/* Section Hero */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Yann Touassom
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
          Étudiant en BTS SIO deuxième année option SLAM
        </p>
      </section>

      {/* Section À propos */}
      <section id="about" className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">À propos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Je suis un jeune étudiant en Mastère expert en système informatique. Dynamique et travailleur, je mets beaucoup de rigueur dans tout ce que j'entreprends.
            </p>
            <p>
              Je souhaite obtenir à la fin de mon parcours mon diplôme d'ingénieur et d'acquérir les bases nécessaires à une bonne intégration professionnelle dans le secteur informatique.
            </p>
          </div>
          <div className="relative h-80">
            <Image 
              src="/images/photo_pro.jpg" 
              alt="Profil"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-6">Mes compétences</h3>
        <div className="space-y-4">
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </section>

      {/* Section Projets */}
      <section id="projects" className="mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Mes projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Section Veille Technologique */}
      <section id="veille" className="mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Veille Technologique</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-xl font-semibold">L'observation des nanoparticules</h3>
          <p>
            Le laboratoire national de métrologie et d'essais (LNE) a dévoilé une nouvelle plateforme dédiée à la caractérisation des nanomatériaux. Son atout ? L'utilisation de l'intelligence artificielle pour accélérer la reconnaissance et la mesure des particules.
          </p>
          <div className="relative h-96 my-6">
            <Image 
              src="/images/nano.png" 
              alt="Nanotechnologie"
              fill
              className="object-contain"
            />
          </div>
          <p>
            Pour mettre au point cet outil, l'équipe d'analyse des données du LNE a utilisé un algorithme de deep learning initialement développé par Facebook et l'a entraîné avec des images annotées par les chercheurs.
          </p>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Me Contacter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <i className="fa fa-map-marker text-xl mr-4"></i>
              <span>Palaiseau, France</span>
            </div>
            <div className="flex items-center mb-4">
              <i className="fa fa-phone text-xl mr-4"></i>
              <span>+33 7 52 04 88 75</span>
            </div>
            <div className="flex items-center">
              <i className="fa fa-envelope text-xl mr-4"></i>
              <span>yann.touassom@gmail.com</span>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Nom" 
                className="w-full p-3 bg-gray-800 rounded-lg"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-3 bg-gray-800 rounded-lg"
              />
              <textarea 
                placeholder="Message" 
                rows={4}
                className="w-full p-3 bg-gray-800 rounded-lg"
              ></textarea>
              <button 
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-medium"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
