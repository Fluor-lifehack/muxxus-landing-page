#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Liste des pages où ajouter le footer
const pagesToUpdate = [
  'src/app/contact/page.tsx',
  'src/app/resources/page.tsx',
  'src/app/pricing/page.tsx',
  'src/app/partners/page.tsx',
  'src/app/events/page.tsx',
  'src/app/testimonials/page.tsx',
  'src/app/news/page.tsx',
  'src/app/downloads/page.tsx',
  'src/app/terms/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/portfolio/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/career/page.tsx',
  'src/app/faq/page.tsx',
  'src/app/case-studies/page.tsx',
  'src/app/use-cases/page.tsx',
  'src/app/products/page.tsx',
  'src/app/security/page.tsx',
  'src/app/solutions/page.tsx',
  'src/app/spend/page.tsx',
  'src/app/support/page.tsx',
  'src/app/product-tour/page.tsx',
  'src/app/payments/page.tsx',
  'src/app/platform-apis/page.tsx',
  'src/app/developers/page.tsx',
  'src/app/integrations/page.tsx',
  'src/app/company/page.tsx'
];

// Fonction pour ajouter le footer à une page
function addFooterToPage(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  Fichier non trouvé: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Vérifier si le footer est déjà présent
    if (content.includes('MuxxusFooter')) {
      console.log(`✅ Footer déjà présent dans: ${filePath}`);
      return true;
    }

    // Ajouter l'import du footer
    let updatedContent = content;
    
    // Trouver la dernière ligne d'import
    const importRegex = /^import.*$/gm;
    const imports = content.match(importRegex);
    
    if (imports) {
      const lastImport = imports[imports.length - 1];
      const footerImport = 'import MuxxusFooter from "@/components/footer/MuxxusFooter";';
      
      if (!content.includes(footerImport)) {
        updatedContent = content.replace(lastImport, `${lastImport}\nimport MuxxusFooter from "@/components/footer/MuxxusFooter";`);
      }
    }

    // Ajouter le footer avant la fermeture de main
    if (updatedContent.includes('</main>')) {
      updatedContent = updatedContent.replace(
        '</main>',
        '      {/* Footer */}\n      <MuxxusFooter />\n    </main>'
      );
    } else if (updatedContent.includes('export default')) {
      // Si pas de balise main, ajouter avant export default
      updatedContent = updatedContent.replace(
        'export default',
        '      {/* Footer */}\n      <MuxxusFooter />\n    </main>\n  );\n}\n\nexport default'
      );
    }

    // Écrire le fichier mis à jour
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`✅ Footer ajouté à: ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Erreur lors de la mise à jour de ${filePath}:`, error.message);
    return false;
  }
}

// Fonction principale
function main() {
  console.log('🚀 Ajout du footer Muxxus à toutes les pages...\n');
  
  let successCount = 0;
  let totalCount = pagesToUpdate.length;
  
  pagesToUpdate.forEach(filePath => {
    if (addFooterToPage(filePath)) {
      successCount++;
    }
  });
  
  console.log(`\n📊 Résumé:`);
  console.log(`✅ Pages mises à jour: ${successCount}`);
  console.log(`❌ Échecs: ${totalCount - successCount}`);
  console.log(`📁 Total traité: ${totalCount}`);
  
  if (successCount === totalCount) {
    console.log('\n🎉 Toutes les pages ont été mises à jour avec succès !');
  } else {
    console.log('\n⚠️  Certaines pages n\'ont pas pu être mises à jour.');
  }
}

// Exécuter le script
if (require.main === module) {
  main();
}

module.exports = { addFooterToPage };
