#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Fonction pour nettoyer les imports non utilisés dans un fichier
function cleanUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const cleanedLines = [];
    const imports = new Set();
    
    // Identifier les imports
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('import ') && line.includes(' from ')) {
        // Extraire les noms des imports
        const importMatch = line.match(/import\s+{([^}]+)}/);
        if (importMatch) {
          const importNames = importMatch[1].split(',').map(name => name.trim());
          importNames.forEach(name => imports.add(name));
        }
      }
    }
    
    // Vérifier l'utilisation des imports dans le reste du fichier
    const fileContent = content;
    const usedImports = new Set();
    
    imports.forEach(importName => {
      if (fileContent.includes(importName) && !fileContent.includes(`import ${importName}`)) {
        usedImports.add(importName);
      }
    });
    
    // Reconstruire le fichier sans les imports non utilisés
    let newContent = '';
    let inImportBlock = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('import ')) {
        if (!inImportBlock) {
          inImportBlock = true;
        }
        
        // Vérifier si cet import est utilisé
        const importMatch = trimmedLine.match(/import\s+{([^}]+)}/);
        if (importMatch) {
          const importNames = importMatch[1].split(',').map(name => name.trim());
          const usedNames = importNames.filter(name => usedImports.has(name));
          
          if (usedNames.length > 0) {
            newContent += line.replace(/\{[^}]+\}/, `{ ${usedNames.join(', ')} }`) + '\n';
          }
          // Si aucun import n'est utilisé, on ignore la ligne
        } else {
          newContent += line + '\n';
        }
      } else {
        if (inImportBlock && trimmedLine === '') {
          continue; // Ignorer les lignes vides après les imports
        }
        inImportBlock = false;
        newContent += line + '\n';
      }
    }
    
    // Écrire le fichier nettoyé
    fs.writeFileSync(filePath, newContent);
    console.log(`✅ Nettoyé: ${filePath}`);
    
  } catch (error) {
    console.error(`❌ Erreur avec ${filePath}:`, error.message);
  }
}

// Fonction pour parcourir récursivement les dossiers
function walkDirectory(dir, callback) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      walkDirectory(filePath, callback);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      callback(filePath);
    }
  });
}

// Exécuter le nettoyage
console.log('🧹 Nettoyage des imports non utilisés...\n');

walkDirectory('./src', (filePath) => {
  cleanUnusedImports(filePath);
});

console.log('\n✨ Nettoyage terminé !');
