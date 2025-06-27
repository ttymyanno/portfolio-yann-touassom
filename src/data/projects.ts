export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: "projet-1",
    title: "Conception d'une charte graphique",
    description: "Création complète d'une identité visuelle pour LegoScreen",
    image: "/images/logo_legoscreen.png",
    link: "https://docs.google.com/presentation/d/1SJDjqc1LL8FiBgmGIqVY706LUtown4k7WoEDk--nau8/edit"
  },
  {
    id: "projet-2",
    title: "Site e-commerce TTYM Shop",
    description: "Plateforme complète avec paiement en ligne et gestion de stock",
    image: "/images/ttymshop.jpg",
    link: "produit.php"
  },
  {
    id: "projet-3",
    title: "Formation RGPD CNIL",
    description: "Certification en protection des données personnelles",
    image: "/images/cnil.png",
    link: "https://atelier-rgpd.cnil.fr/mod/customcert/view.php?id=54&downloadown=1"
  },
  {
    id: "projet-4",
    title: "Solution Cloud pour Maison des Ligues",
    description: "Migration vers une infrastructure cloud scalable",
    image: "/images/m2l.png",
    link: "https://docs.google.com/presentation/d/1A6PSp88PF5A5jlMdQLSVOSBFwO19apJQQ0L-uC0A3Js/edit"
  },
  {
    id: "projet-5",
    title: "Sécurité des mots de passe",
    description: "Implémentation de systèmes de cryptage avancés",
    image: "/images/hack.png",
    link: "https://drive.google.com/drive/folders/18lIyk6XzhXxv8l8LhtyXURfDXdNMSHPo"
  }
];
