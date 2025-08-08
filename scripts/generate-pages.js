const fs = require('fs');
const path = require('path');

// Lire la configuration des pages
const pagesConfig = JSON.parse(fs.readFileSync('./src/config/pages-config.json', 'utf8'));

// Template pour une page générique
const pageTemplate = (title, description) => `import DesignStudioHeader from "@/components/headers/DesignStudioHeader";
import BottomSection from "@/components/elements/bottomSection/BottomSection";

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <main className="min-h-screen bg-white">
      <DesignStudioHeader />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            ${description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes our solution perfect for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">Lightning-fast performance with 99.9% uptime guarantee.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-gray-600">Bank-level security with end-to-end encryption.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global</h3>
              <p className="text-gray-600">Available in 190+ countries with local support.</p>
            </div>
          </div>
        </div>
      </section>

      <BottomSection />
    </main>
  );
}`;

// Fonction pour créer un répertoire s'il n'existe pas
function ensureDirectoryExists(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExists(dirname);
  fs.mkdirSync(dirname);
}

// Générer toutes les pages
pagesConfig.pages.forEach(page => {
  const pagePath = page.path.replace(/^\//, ''); // Enlever le slash initial
  const filePath = path.join('./src/app', pagePath, 'page.tsx');
  
  // Créer le répertoire si nécessaire
  ensureDirectoryExists(filePath);
  
  // Générer le nom de la fonction à partir du titre
  const functionName = page.title.replace(/[^a-zA-Z0-9]/g, '');
  
  // Créer le contenu de la page
  const pageContent = pageTemplate(page.title, page.description);
  
  // Écrire le fichier
  fs.writeFileSync(filePath, pageContent);
  
  console.log(`✅ Created: ${filePath}`);
});

console.log('\n🎉 All pages have been generated successfully!'); 