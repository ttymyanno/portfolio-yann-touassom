module.exports = {
  images: {
    domains: ['monespaces.w3spaces.com'],
    unoptimized: true // Désactive l'optimisation pour l'export statique
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
};
