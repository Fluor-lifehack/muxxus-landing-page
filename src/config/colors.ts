// Configuration des couleurs harmonisées pour tout le projet
export const colors = {
  // Couleurs principales
  primary: {
    main: '#121212',
    light: '#1a1a1a',
    dark: '#000000',
    contrast: '#ffffff'
  },
  
  // Couleurs de sécurité (pour le thème Muxxus)
  security: {
    primary: '#1e293b', // slate-800
    secondary: '#334155', // slate-700
    accent: '#3b82f6', // blue-500
    success: '#10b981', // emerald-500
    warning: '#f59e0b', // amber-500
    error: '#ef4444', // red-500
  },
  
  // Couleurs de fond
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc', // slate-50
    dark: '#121212',
    darkSecondary: '#1e1e1e',
  },
  
  // Couleurs de texte
  text: {
    primary: '#121212',
    secondary: '#64748b', // slate-500
    light: '#ffffff',
    muted: '#94a3b8', // slate-400
  },
  
  // Couleurs de bordure
  border: {
    light: '#e2e8f0', // slate-200
    medium: '#cbd5e1', // slate-300
    dark: '#475569', // slate-600
  },
  
  // Couleurs de boutons
  button: {
    primary: {
      bg: '#121212',
      text: '#ffffff',
      hover: '#1a1a1a',
    },
    secondary: {
      bg: 'transparent',
      text: '#121212',
      border: '#121212',
      hover: '#121212',
      hoverText: '#ffffff',
    },
    security: {
      bg: '#1e293b',
      text: '#ffffff',
      hover: '#334155',
    },
  }
};

// Classes Tailwind harmonisées
export const buttonClasses = {
  primary: 'bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200',
  secondary: 'bg-transparent text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200',
  security: 'bg-slate-800 text-white hover:bg-slate-700 transition-colors duration-200',
  outline: 'bg-transparent text-gray-900 border border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors duration-200',
};

export const textClasses = {
  heading: 'text-gray-900 dark:text-white',
  body: 'text-gray-600 dark:text-gray-300',
  muted: 'text-gray-500 dark:text-gray-400',
  light: 'text-white',
};

export const backgroundClasses = {
  primary: 'bg-white dark:bg-gray-900',
  secondary: 'bg-gray-50 dark:bg-gray-800',
  dark: 'bg-gray-900',
  light: 'bg-white',
};
