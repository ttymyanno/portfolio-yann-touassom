import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative w-12 h-12 mr-4">
            <Image 
              src="/images/photo_pro.jpg" 
              alt="Profile"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-xl font-bold">Yann Touassom</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link href="#home" className="hover:text-blue-400 transition">Accueil</Link>
          <Link href="#about" className="hover:text-blue-400 transition">À propos</Link>
          <Link href="#projects" className="hover:text-blue-400 transition">Projets</Link>
          <Link href="#veille" className="hover:text-blue-400 transition">Veille</Link>
          <Link href="#contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
        
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg font-medium">
          Télécharger CV
        </button>
      </div>
    </nav>
  );
}
